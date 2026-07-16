/* =========================================================
   脳活アプリ・そよぎ  ―  本体（画面遷移・多言語・進行・設定）
   読み込み順: config.js → lang.js → audio.js → store.js
              → games/*.js → app.js（このファイル）
   ========================================================= */

/* ===== 言語の決定（保存 > 端末の言語 > 英語） ===== */
function detectLang(){
  const saved = Store.getLang();
  if(saved && LANG[saved]) return saved;
  const nav = (navigator.language || 'en');
  if(LANG[nav]) return nav;
  if(/^zh/i.test(nav)) return /tw|hk|hant/i.test(nav) ? 'zh-TW' : 'zh';
  const base = nav.split('-')[0];
  return LANG[base] ? base : 'en';
}
let CUR  = detectLang();
let I18N = LANG[CUR];
function t(k){ return (I18N.ui[k] || k); }

function applyI18n(){
  I18N = LANG[CUR];
  document.documentElement.lang = CUR;
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.textContent = t(el.dataset.i18n); });
}

/* ===== 画面切り替え ===== */
function show(id){
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0,0);
  Bgm.setMood(id === 'game' ? 'game' : id === 'records' ? 'history' : 'title');  // ゲーム=軽快/記録=振り返り/その他=ポップ
}

/* ===== 正誤フィードバック（大きな○×＋リング＋キラキラ＋音） ===== */
const Feedback = {
  flash(ok, cb){
    const fb = document.getElementById('feedback');
    let html = '<div class="fb-ring"></div><div class="mark">' + (ok ? '○' : '✕') + '</div>';
    if(ok){
      html += '<div class="sparkles">';
      for(let i=0;i<6;i++) html += '<span style="--a:'+(i*60)+'deg"></span>';
      html += '</div>';
    }
    fb.innerHTML = html;
    fb.className = 'show ' + (ok ? 'ok' : 'ng');
    ok ? Sound.ok() : Sound.ng();
    // 正解は1.0秒。誤答は「まちがい」をしっかり見て気づけるよう1.8秒（シニアがゆっくり確認できる長さ）
    setTimeout(()=>{ fb.className = ''; if(cb) cb(); }, ok ? 1000 : 1800);
  }
};

/* 回答ボタンの正誤ハイライト（正解を緑・押した誤答を赤で見せる） */
function reveal(correctEl, tappedEl){
  if(correctEl) correctEl.classList.add('is-correct');
  if(tappedEl && tappedEl !== correctEl) tappedEl.classList.add('is-wrong');
}

/* ===== ゲームに渡す描画コンテキスト =====
   gen … この描画コンテキストが属するトレーニング世代。中断(やめる)や再開でtrainSessionが
        進むと alive() が false になり、DOM書き込み系(instruct/progress/count)は無視する。
        これにより、旧セッションのゲーム内部の非同期(記憶ゲームの提示ループ等)が完了時に
        共有DOM(#game .g-instruct)を書き換えて新セッションを汚すのを防ぐ。 */
function makeCtx(gen){
  const g = document.getElementById('game');
  const alive = () => gen === trainSession;
  return {
    body: g.querySelector('.g-body'),
    alive,
    instruct(txt){ if(!alive()) return; g.querySelector('.g-instruct').textContent = txt || ''; },
    progress(pct){ if(!alive()) return; g.querySelector('.g-progress').style.width = pct + '%'; },
    count(txt){ if(!alive()) return; g.querySelector('.g-count').textContent = txt || ''; },
  };
}

/* ===== ゲーム定義・進行 ===== */
const GAMES  = { calc:CalcGame, memory:MemoryGame, stroop:StroopGame, silhouette:SilhouetteGame, numtouch:NumTouchGame };
const ROUNDS = { calc:5, memory:3, stroop:5, silhouette:5, numtouch:3 };
const SEQUENCE = ['calc','memory','stroop','silhouette','numtouch'];

function shuffle(a){
  a = a.slice();
  for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
  return a;
}

let lastHard = false;      // 直前に遊んだ難易度（結果画面の「もういちど」で再開するため保持）
let trainSession = 0;      // トレーニング実行の世代トークン（やめる/再開で古い実行のコールバックを無効化）

function runTraining(hard){
  lastHard = hard;
  const my = ++trainSession;               // この実行の世代（保留中の古いコールバックはこれで弾く）
  // 出題リストを作る：各ゲームの問題数ぶんのIDを並べる
  const results = {};
  SEQUENCE.forEach(id => results[id] = { game:id, correct:0, total:0 });
  let list = [];
  SEQUENCE.forEach(id => { for(let k=0;k<ROUNDS[id];k++) list.push(id); });
  if(hard) list = shuffle(list);          // むずかしい＝1問ごとに種類がランダム（いつもは種類ごとに順番）
  const total = list.length;

  const memCount = { n:0 };                // 記憶ゲームは出るたび長さ +1
  const ctx = makeCtx(my);                 // この世代のctx（中断後はctx.alive()がfalse＝DOM書き込みを無視）
  show('game');
  let i = 0;
  (function step(){
    if(my !== trainSession) return;        // やめる等で世代が変わったら以降の進行を止める
    if(i >= total){ finishTraining(SEQUENCE.map(id=>results[id]), hard); return; }
    const id = list[i];
    ctx.body.innerHTML = ''; ctx.instruct('');
    ctx.count((i+1) + ' / ' + total);
    ctx.progress(i/total*100);
    const opts = { hard };
    if(id === 'memory'){ memCount.n++; opts.seqLen = (hard?3:2) + memCount.n; }
    GAMES[id].round(ctx, opts, (ok)=>{
      if(my !== trainSession) return;      // 破棄されたセッションのゲーム完了コールバックは無視（記録もしない）
      results[id].total++; if(ok) results[id].correct++;
      i++; step();
    });
  })();
}

/* ===== トレーニング中断（やめる） ===== */
function showQuitConfirm(){ document.getElementById('quitConfirm').hidden = false; }
function hideQuitConfirm(){ document.getElementById('quitConfirm').hidden = true; }
function quitTraining(){
  trainSession++;         // 実行中セッションを無効化＝保留中のstep/ゲーム完了コールバックが進まない（途中結果は記録されない）
  hideQuitConfirm();
  renderHome();
  show('home');
}

function finishTraining(results, hard){
  Store.record(results, hard ? 'hard' : 'usual');
  renderResult(results);
  show('result');
}

/* ===== 結果画面 ===== */
function renderResult(results){
  const totalC = results.reduce((s,r)=>s+r.correct,0);
  const totalT = results.reduce((s,r)=>s+r.total,0);
  const ratio  = totalT ? totalC/totalT : 0;
  const stars  = ratio>=0.8 ? 3 : ratio>=0.5 ? 2 : 1;
  const gname  = { calc:t('gCalc'), memory:t('gMemory'), stroop:t('gStroop'), silhouette:t('gShape'), numtouch:t('gNumber') };
  const starHtml = Array.from({length:stars}, (_,i)=>
    '<span style="animation-delay:'+(i*0.22)+'s">⭐</span>').join('');
  const el = document.getElementById('resultBody');
  el.innerHTML =
    '<div class="stars">'+starHtml+'</div>' +
    '<div class="result-total" id="rTotal">0 / '+totalT+'</div>' +
    '<div class="result-list">' +
      results.map(r=>'<div class="rrow"><span>'+gname[r.game]+'</span><span>'+r.correct+' / '+r.total+'</span></div>').join('') +
    '</div>' +
    '<div class="streak">🔥 '+Store.streak()+'</div>';

  // 数字を 0 から実際の正解数まで数え上げる
  const rt = document.getElementById('rTotal');
  let cur = 0;
  if(totalC <= 0){ rt.textContent = '0 / '+totalT; }
  else{
    const iv = setInterval(()=>{ cur++; rt.textContent = cur+' / '+totalT;
      if(cur >= totalC) clearInterval(iv); }, 70);
  }
  makeConfetti(el, stars>=2);
  Sound.fanfare();
}

/* 紙吹雪（星2つ以上で盛大に） */
function makeConfetti(parent, big){
  const conf = document.createElement('div'); conf.className = 'confetti';
  const colors = ['#E53935','#1E88E5','#FDD835','#43A047','#8E24AA','#EF6C00'];
  const n = big ? 22 : 10;
  for(let i=0;i<n;i++){
    const p = document.createElement('i');
    p.style.left = (Math.random()*100)+'%';
    p.style.background = colors[i % colors.length];
    p.style.animationDelay = (Math.random()*0.5)+'s';
    conf.appendChild(p);
  }
  parent.appendChild(conf);
  setTimeout(()=>conf.remove(), 3200);
}

/* ===== 設定画面 ===== */
function setScale(s){
  Store.setScale(s);
  document.body.classList.remove('scale-M','scale-L','scale-XL');
  document.body.classList.add('scale-'+s);
}
/* 設定画面の「静的ボタン」(大きさ・おと・おんがく)は初期化時に一度だけバインドする。
   ・これらは常にHTMLに存在する固定要素。renderSettingsは開くたび走るので、そこで毎回
     Tap.bindすると tap.js に解除機構が無くリスナーが二重三重に蓄積する（音トグルが
     押すたび複数回発火する不具合の原因）。「バインドは一度きり／状態反映は毎回」に分離する。 */
function bindSettingsStatic(){
  document.querySelectorAll('#sizeRow .size-btn').forEach(b=>{
    Tap.bind(b, ()=>{ setScale(b.dataset.s); reflectSettings(); });
  });
  const sb = document.getElementById('soundBtn');
  // 音ON/OFFボタンは{silent:true}＝押下音を鳴らさず、toggle内の「ON化時の確認音」に任せる（既存挙動を維持）
  Tap.bind(sb, ()=>{ Sound.toggle(); reflectSettings(); }, { silent:true });
  const mb = document.getElementById('bgmBtn');
  Tap.bind(mb, ()=>{ Bgm.toggle(); reflectSettings(); });
}

/* 設定画面の状態反映のみ（大きさの選択・音/BGMのアイコン）。バインドはしない＝何度呼んでも安全 */
function reflectSettings(){
  document.querySelectorAll('#sizeRow .size-btn').forEach(b=>{
    b.classList.toggle('sel', b.dataset.s===Store.getScale());
  });
  document.getElementById('soundBtn').textContent = Sound.enabled ? '🔊' : '🔇';
  document.getElementById('bgmBtn').textContent   = Bgm.enabled ? '🎵' : '🔇';
}

function renderSettings(){
  const lg = document.getElementById('langGrid');
  lg.innerHTML = LANGS.map(l=>
    '<button class="lang-btn'+(l.code===CUR?' sel':'')+'" data-c="'+l.code+'">'+l.label+'</button>'
  ).join('');
  // 言語ボタンは毎回innerHTMLで作り直す＝古い要素はリスナーごと破棄されるので、都度bindしても蓄積しない
  lg.querySelectorAll('.lang-btn').forEach(b=>{
    Tap.bind(b, ()=>{ CUR=b.dataset.c; Store.setLang(CUR); applyI18n(); renderSettings(); });
  });
  reflectSettings();
}

/* ===== ホームの日付（大きく）・連続日数 ===== */
function renderHome(){
  const d = new Date();
  let dateStr;
  try{
    dateStr = d.toLocaleDateString(CUR || undefined,
      { year:'numeric', month:'long', day:'numeric', weekday:'long' });
  }catch(e){ dateStr = d.toLocaleDateString(); }
  const du = I18N.ui.daysUnit || '', tu = I18N.ui.timesUnit || '';
  const streak = Store.displayStreak();
  // 連続0日のときは行ごと出さない（🔥 0 を見せない）。単位(日/天/일)がある言語だけ付ける
  const streakHtml = streak > 0
    ? '<div class="home-streak">🔥 '+streak+du+'</div>'
    : '';
  document.getElementById('homeInfo').innerHTML =
    '<div class="home-date">'+dateStr+'</div>' +
    '<div class="home-stats">' +
      '<div class="stat"><span class="st-cap">'+t('playDays')+'</span>' +
        '<span class="st-val"><b>'+Store.totalDays()+'</b>'+(du?'<i>'+du+'</i>':'')+'</span></div>' +
      '<div class="stat"><span class="st-cap">'+t('playCount')+'</span>' +
        '<span class="st-val"><b>'+Store.totalPlays()+'</b>'+(tu?'<i>'+tu+'</i>':'')+'</span></div>' +
    '</div>' +
    streakHtml;
}

/* ===== 記録（カレンダー） ===== */
let calY, calM;   // 表示中の年・月(0-based)

function openRecords(){
  const d = new Date(); calY = d.getFullYear(); calM = d.getMonth();
  renderRecords();
  document.getElementById('dayDetail').innerHTML = '';
  show('records');
}
function calShift(delta){
  calM += delta;
  if(calM < 0){ calM = 11; calY--; }
  if(calM > 11){ calM = 0; calY++; }
  renderRecords();
  document.getElementById('dayDetail').innerHTML = '';
}
function renderRecords(){
  const first = new Date(calY, calM, 1);
  document.getElementById('calMonth').textContent =
    first.toLocaleDateString(CUR || undefined, { year:'numeric', month:'long' });

  // 曜日ヘッダ（日曜始まり／2023-01-01は日曜）
  const wk = document.getElementById('calWeek'); wk.innerHTML = '';
  for(let i=0;i<7;i++){
    const s = document.createElement('div'); s.className = 'cal-wd';
    s.textContent = new Date(2023,0,1+i).toLocaleDateString(CUR || undefined, { weekday:'short' });
    wk.appendChild(s);
  }

  const grid = document.getElementById('calGrid'); grid.innerHTML = '';
  const startWd = first.getDay();
  const days = new Date(calY, calM+1, 0).getDate();
  const todayKey = Store.keyOf(new Date());
  for(let b=0;b<startWd;b++){ const e=document.createElement('div'); e.className='cal-cell empty'; grid.appendChild(e); }
  for(let day=1; day<=days; day++){
    const key = Store.keyOf(new Date(calY, calM, day));
    const c = Store.counts(key);
    const has = (c.usual + c.hard) > 0;
    const cell = document.createElement('div');
    cell.className = 'cal-cell' + (has?' has':'') + (key===todayKey?' today':'');
    let inner = '<div class="cal-num">'+day+'</div>';
    if(has){
      const best = Store.bestStars(key);
      inner += '<div class="cal-stars">'+ (best>0 ? '★'.repeat(best) : '') +'</div>';
      let badges = '';
      if(c.usual>0) badges += '<span class="badge u">'+c.usual+'</span>';
      if(c.hard>0)  badges += '<span class="badge h">'+c.hard+'</span>';
      inner += '<div class="cal-badges">'+badges+'</div>';
    }
    cell.innerHTML = inner;
    if(has) Tap.bind(cell, ()=>{ renderDayDetail(key); });
    grid.appendChild(cell);
  }
}
function renderDayDetail(key){
  const el = document.getElementById('dayDetail');
  const title = new Date(key+'T00:00:00').toLocaleDateString(CUR || undefined, { month:'long', day:'numeric', weekday:'short' });
  const data = Store.day(key);
  if(!data || !data.sessions || !data.sessions.length){
    el.innerHTML = '<div class="dd-title">'+title+'</div><div class="dd-none">'+t('noRecord')+'</div>'; return;
  }
  const gname = { calc:t('gCalc'), memory:t('gMemory'), stroop:t('gStroop'), silhouette:t('gShape'), numtouch:t('gNumber') };
  let html = '<div class="dd-title">'+title+'</div>';
  data.sessions.forEach(s=>{
    const ratio = s.total ? s.correct/s.total : 0;
    const stars = ratio>=0.8 ? 3 : ratio>=0.5 ? 2 : 1;
    const modeCls = s.mode==='hard' ? 'h' : 'u';
    const modeLbl = s.mode==='hard' ? t('hard') : t('usual');
    // プレイした時刻（時:分）。旧データで at が無い場合はガードして出さない
    let timeStr = '';
    if(s.at){
      try{ timeStr = new Date(s.at).toLocaleTimeString(CUR || undefined, { hour:'2-digit', minute:'2-digit' }); }
      catch(e){ timeStr = ''; }
    }
    let per = '';
    ['calc','memory','stroop','silhouette','numtouch'].forEach(g=>{
      if(s.games && s.games[g]) per += '<span class="dd-g">'+gname[g]+' '+s.games[g].c+'/'+s.games[g].t+'</span>';
    });
    html += '<div class="dd-row"><div class="dd-head">'+
      (timeStr ? '<span class="dd-time">'+timeStr+'</span>' : '')+
      '<span class="dd-mode '+modeCls+'">'+modeLbl+'</span>'+
      '<span class="dd-score">'+s.correct+' / '+s.total+'</span>'+
      '<span class="dd-stars">'+'⭐'.repeat(stars)+'</span></div>'+
      '<div class="dd-games">'+per+'</div></div>';
  });
  el.innerHTML = html;
}

/* ===== 起動 ===== */
function init(){
  setScale(Store.getScale());
  applyI18n();
  renderHome();

  bindSettingsStatic();   // 設定の固定ボタン(大きさ・おと・おんがく)は起動時に一度だけバインド（A-1）

  Tap.bind(document.getElementById('btnStart'), ()=>{ show('mode'); });
  Tap.bind(document.getElementById('btnUsual'), ()=>{ runTraining(false); });  // いつもの＝種類ごとに順番・ふつう
  Tap.bind(document.getElementById('btnHard'),  ()=>{ runTraining(true); });   // むずかしい＝1問ごとにランダム・高難度
  Tap.bind(document.getElementById('btnGear'),  ()=>{ renderSettings(); show('settings'); });
  Tap.bind(document.getElementById('btnRecords'), ()=>{ openRecords(); });
  Tap.bind(document.getElementById('calPrev'),  ()=>{ calShift(-1); });
  Tap.bind(document.getElementById('calNext'),  ()=>{ calShift(1); });
  Tap.bind(document.getElementById('btnAgain'), ()=>{ runTraining(lastHard); });   // 結果画面「もういちど」＝同じ難易度でもう一度（B-1）
  // トレーニング中断「やめる」：ゲーム画面のボタン→確認オーバーレイ→やめる/つづける（B-5）
  Tap.bind(document.getElementById('btnQuit'), ()=>{ showQuitConfirm(); });
  Tap.bind(document.getElementById('quitYes'), ()=>{ quitTraining(); });
  Tap.bind(document.getElementById('quitNo'),  ()=>{ hideQuitConfirm(); });
  document.querySelectorAll('[data-home]').forEach(b=> Tap.bind(b, ()=>{ renderHome(); show('home'); }));

  show('home');
  Bgm.start();   // 起動時に自動でBGM開始（PWA/Androidは即・Webは制限で最初の操作時に自動発火）
}
document.addEventListener('DOMContentLoaded', init);
// 保険：Webの自動再生制限で保留中なら、最初の操作でAudioContextを解禁→onstatechangeで自動発火
document.addEventListener('pointerdown', ()=>{ Sound.unlock(); Bgm.start(); }, { once:true });
document.addEventListener('keydown',     ()=>{ Sound.unlock(); Bgm.start(); }, { once:true });
// タブを離れている間はBGMを止め、戻ったら再開（電池・マナー配慮）
document.addEventListener('visibilitychange', ()=>{ document.hidden ? Bgm.stop() : Bgm.start(); });

/* サービスワーカー（オフライン） */
if('serviceWorker' in navigator){
  window.addEventListener('load', ()=> navigator.serviceWorker.register('sw.js').catch(()=>{}));
}
