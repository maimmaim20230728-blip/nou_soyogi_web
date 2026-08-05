'use strict';
/* =========================================================
   起動＋操作スモークテスト（脳活そよぎ）
   ・実在idだけ返す疑似DOMでapp.js等を起動し、参照切れ／初期化例外を検出する
   ・pointerdown→pointerup を実際に発火して主要導線をなぞる:
       起動→ホーム描画→設定を3回開く→音トグルが「1タップ=1回」で切り替わる(A-1回帰)
       →いつもの開始→やめる確認→もういちど
   ・さらに「やめる」中断が記憶ゲーム内部の非同期を止めることを回帰検証:
       記憶の提示中にquit確定→以後 Sound.pad が一切鳴らない・共有DOM(.g-instruct)が
       旧セッションに上書きされない（新セッションの指示文が保たれる）
   ・使い方: node _smoke.js
   ・注意: このファイルは sw.js の precache や build-www.js のコピーリストに入れないこと
   ========================================================= */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = __dirname;
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const ids = new Set([...html.matchAll(/id="([^"]+)"/g)].map(m => m[1]));

/* ---- 疑似DOM要素（リスナーを実際に保持してタップ発火できる／内部要素は安定スタブ） ---- */
function makeEl(tag){
  const el = {
    tagName:(tag||'div').toUpperCase(),
    children:[], style:{}, dataset:{},
    textContent:'', innerHTML:'', value:'', src:'', href:'',
    hidden:false, disabled:false,
    clientWidth:320, clientHeight:400, offsetWidth:100,
    _listeners:{}, _qs:{},
    classList:{
      _s:new Set(),
      add(...c){ c.forEach(x=>this._s.add(x)); },
      remove(...c){ c.forEach(x=>this._s.delete(x)); },
      toggle(c,f){ if(f===undefined) f=!this._s.has(c); if(f) this._s.add(c); else this._s.delete(c); return f; },
      contains(c){ return this._s.has(c); }
    },
    appendChild(c){ this.children.push(c); return c; },
    removeChild(c){ const i=this.children.indexOf(c); if(i>=0) this.children.splice(i,1); return c; },
    remove(){},
    setAttribute(){}, getAttribute(){ return null; },
    addEventListener(type, fn){ (this._listeners[type]=this._listeners[type]||[]).push(fn); },
    removeEventListener(type, fn){ const a=this._listeners[type]; if(a){ const i=a.indexOf(fn); if(i>=0) a.splice(i,1); } },
    setPointerCapture(){}, releasePointerCapture(){},
    focus(){}, scrollIntoView(){},
    getBoundingClientRect(){ return { top:0,left:0,width:100,height:50,bottom:50,right:100 }; },
    // 同じセレクタには同じスタブを返す（.g-instruct 等を安定した共有DOMとして観測できるように）
    querySelector(sel){ if(!this._qs[sel]) this._qs[sel]=makeEl(); return this._qs[sel]; },
    querySelectorAll(){ return []; }
  };
  return el;
}

const created = {};
function byId(id){
  if(!ids.has(id)) return null;   // 実在しないid＝本物同様nullを返す→参照切れが例外として顕在化
  if(!created[id]) created[id] = makeEl();
  return created[id];
}

/* pointerdown→pointerup を発火して Tap.bind の fn を呼ぶ（移動0なので必ず発火） */
function dispatch(el, type, ev){ (el._listeners[type]||[]).slice().forEach(fn=>fn(ev)); }
function tapEl(el){
  if(!el) throw new Error('tapEl: 対象要素がnull');
  const base = { isPrimary:true, pointerId:1, clientX:5, clientY:5, currentTarget:el, target:el, preventDefault(){} };
  dispatch(el, 'pointerdown', base);
  dispatch(el, 'pointerup', base);
}

const documentStub = {
  documentElement: Object.assign(makeEl('html'), { lang:'', dir:'' }),
  head: makeEl('head'), body: makeEl('body'), title:'',
  createElement:(t)=>makeEl(t),
  getElementById: byId,
  addEventListener(){}, removeEventListener(){},
  querySelector(sel){
    sel = String(sel).trim();
    const m = /^#([A-Za-z0-9_-]+)$/.exec(sel);
    if(m) return byId(m[1]);
    return makeEl();
  },
  querySelectorAll(){ return []; }   // [data-i18n]/.screen/#sizeRow .size-btn 等は空でよい（起動確認が目的）
};

/* ---- Web Audio スタブ（合成音・BGMが例外にならないように） ---- */
function audioParam(){ return { value:0, setValueAtTime(){}, exponentialRampToValueAtTime(){},
  linearRampToValueAtTime(){}, cancelScheduledValues(){}, setTargetAtTime(){} }; }
function makeNode(){ return { type:'sine', frequency:audioParam(), Q:audioParam(), gain:audioParam(),
  connect(){}, disconnect(){}, start(){}, stop(){} }; }
function FakeAudioContext(){ this.currentTime=0; this.state='running'; this.destination={}; this.onstatechange=null; }
FakeAudioContext.prototype.createOscillator = function(){ return makeNode(); };
FakeAudioContext.prototype.createGain = function(){ return makeNode(); };
FakeAudioContext.prototype.createBiquadFilter = function(){ return makeNode(); };
FakeAudioContext.prototype.resume = function(){ return Promise.resolve(); };

/* ---- localStorage スタブ（実メモリ＝トグルの永続も再現） ---- */
const _ls = {};
const localStorageStub = {
  getItem:(k)=> (k in _ls ? _ls[k] : null),
  setItem:(k,v)=>{ _ls[k] = String(v); },
  removeItem:(k)=>{ delete _ls[k]; }
};

const sandbox = {
  console,
  document: documentStub,
  navigator: { language:'ja' },     // serviceWorkerプロパティ無し＝SW登録ブロックは自然にスキップ
  localStorage: localStorageStub,
  location: { hostname:'smoke.test', protocol:'https:', origin:'https://smoke.test' },
  AudioContext: FakeAudioContext, webkitAudioContext: FakeAudioContext,
  addEventListener(){}, removeEventListener(){}, scrollTo(){},
  // 記憶ゲームの提示(sleep)を実際に走らせるため setTimeout は本物を使う。
  // ただし BGM の setInterval は鳴らし続けない（プロセスを終わらせる）ため no-op のまま。
  setTimeout:(fn,ms)=>setTimeout(fn,ms), clearTimeout:(id)=>clearTimeout(id),
  setInterval:()=>0, clearInterval(){},
  requestAnimationFrame:()=>0, cancelAnimationFrame(){},
  __tap: tapEl,                                        // 同一スコープからタップ発火
  __sleep: (ms)=> new Promise(r=> setTimeout(r, ms)),  // 本物のタイマーで待つ（回帰検証用）
};
sandbox.window = sandbox;
sandbox.globalThis = sandbox;

/* index.html のスクリプト読み込み順どおりに連結（＋末尾に操作エピローグ） */
const parts = [
  'data/config.js','data/lang.js','audio.js','store.js','tap.js',
  'games/calc.js','games/memory.js','games/stroop.js','games/silhouette.js','games/numtouch.js',
  'app.js'
];
let src = parts.map(f => fs.readFileSync(path.join(root, f), 'utf8')).join('\n');

/* 操作エピローグ（Sound/Store/trainSession等と同一スコープなので直接触れる／Promiseを返す） */
src += `
;(async function(){
  init();  // 起動＝設定バインド＋ホーム描画

  // 設定を3回開く（renderSettingsを3回走らせる＝A-1が直っていればリスナーは蓄積しない）
  __tap(document.getElementById('btnGear'));
  __tap(document.getElementById('btnGear'));
  __tap(document.getElementById('btnGear'));

  // A-1回帰: 音トグルが「1タップ = toggle 1回」で切り替わること
  var _tc = 0, _orig = Sound.toggle;
  Sound.toggle = function(){ _tc++; return _orig.apply(Sound, arguments); };
  var before = Sound.enabled;
  __tap(document.getElementById('soundBtn'));
  if(_tc !== 1) throw new Error('A-1回帰: soundBtnが1タップで toggle ' + _tc + ' 回発火（リスナー蓄積の疑い）');
  if(Sound.enabled === before) throw new Error('A-1回帰: soundBtnを押しても音設定が切り替わらない');
  Sound.toggle = _orig;

  // いつもの開始（ホーム→モード→いつもの）
  __tap(document.getElementById('btnStart'));
  __tap(document.getElementById('btnUsual'));

  // やめる確認→やめる
  __tap(document.getElementById('btnQuit'));
  if(document.getElementById('quitConfirm').hidden !== false) throw new Error('やめる確認オーバーレイが表示されない');
  __tap(document.getElementById('quitYes'));
  if(document.getElementById('quitConfirm').hidden !== true) throw new Error('やめる確定後に確認が閉じていない');

  // もういちど（同じ難易度で再開）
  __tap(document.getElementById('btnAgain'));

  // ===== 回帰: 記憶提示中のquitがゲーム内部の非同期を止める =====
  var g = document.getElementById('game');
  var instructNode = g.querySelector('.g-instruct');   // 安定スタブ＝共有DOM(.g-instruct)相当
  var padCalls = 0, origPad = Sound.pad;
  Sound.pad = function(){ padCalls++; return origPad.apply(Sound, arguments); };

  var genOld = ++trainSession;                          // 記憶を動かす世代
  var ctxOld = makeCtx(genOld);
  GAMES.memory.round(ctxOld, { seqLen:4 }, function(){});
  await __sleep(900);                                   // 提示が始まり最低1回はSound.padが鳴るまで待つ
  if(padCalls < 1) throw new Error('回帰テスト設計: 記憶提示中にSound.padが鳴っていない（前提崩れ）');
  var padAtQuit = padCalls;

  // 「やめる」→即・新セッション開始（世代を2つ進める＝旧ctxを無効化し、新ctxが自分の指示文を書く）
  trainSession++;                                       // quit相当
  var ctxNew = makeCtx(++trainSession);                 // 新セッション相当
  ctxNew.instruct('NEW-SESSION');                       // 新セッションが自分の指示文を書く（生きているので反映される）

  await __sleep(1300);                                  // 旧セッションの提示ループが完了しきるまで待つ
  if(padCalls !== padAtQuit) throw new Error('回帰: 中断後もSound.padが鳴り続けた（+' + (padCalls - padAtQuit) + '回）');
  if(instructNode.textContent !== 'NEW-SESSION') throw new Error('回帰: 中断後の旧セッションが共有DOMを上書き（現在値: ' + instructNode.textContent + '）');
  Sound.pad = origPad;
})();
`;

/* ---- [セーフエリア] 上下のバーに隠れない（targetSdk36＝エッジtoエッジ強制の回帰防止） ----
   Android15+ではWebViewがステータスバー(上・約44px)とナビゲーションバー(下・約48px)の
   下まで描かれる。画面上端の固定要素（進捗バー・残り問題数・やめる）と、上寄せ画面の
   逃げ余白に env(safe-area-inset-*) が入っているかをCSSの実文字で検査する。
   ※ index.html の viewport-fit=cover が無いと env が全て0になるので併せて確認する。 */
function checkSafeArea(){
  // コメントを外してから空白を詰める（コメント内の "top:12px" 等を実装と誤認しないため）
  const css = fs.readFileSync(path.join(root, 'style.css'), 'utf8')
    .replace(/\/\*[\s\S]*?\*\//g, '').replace(/\s+/g, '');
  const cases = [
    ['viewport-fit=cover がある（env の前提）', ()=> /viewport-fit=cover/.test(html)],
    ['進捗バーの上端が env(safe-area-inset-top)',
      ()=> /\.g-progress\{[^}]*top:env\(safe-area-inset-top,0px\)/.test(css)],
    ['残り問題数が インセット+16px / 右は max(18px,右インセット)',
      ()=> /\.g-count\{[^}]*top:calc\(env\(safe-area-inset-top,0px\)\+16px\)[^}]*right:max\(18px,env\(safe-area-inset-right,0px\)\)/.test(css)],
    ['やめるボタンが インセット+14px / 左は max(14px,左インセット)',
      ()=> /\.quit-x\{[^}]*top:calc\(env\(safe-area-inset-top,0px\)\+14px\)[^}]*left:max\(14px,env\(safe-area-inset-left,0px\)\)/.test(css)],
    ['#game の逃げ余白が 固定要素と連動（インセット+64px）',
      ()=> /#game\{[^}]*padding-top:calc\(env\(safe-area-inset-top,0px\)\+64px\)/.test(css)],
    ['設定画面の上余白が インセット+40px（見出しが隠れない）',
      ()=> /\.settings\{[^}]*padding-top:calc\(env\(safe-area-inset-top,0px\)\+40px\)/.test(css)],
    ['記録画面の上余白が インセット+16px（月送り◀▶が押せる）',
      ()=> /\.records\{[^}]*padding:calc\(env\(safe-area-inset-top,0px\)\+16px\)/.test(css)],
    ['記録画面の下余白が インセット+24px（ホームにもどるが隠れない）',
      ()=> /\.records\{[^}]*calc\(env\(safe-area-inset-bottom,0px\)\+24px\)/.test(css)],
    ['全画面共通(.screen)の上下余白にインセット',
      ()=> /\.screen\{[^}]*padding:calc\(env\(safe-area-inset-top,0px\)\+24px\)[^}]*calc\(env\(safe-area-inset-bottom,0px\)\+24px\)/.test(css)],
    ['ホームの設定ボタンと本体の逃げ余白（既存）',
      ()=> /\.gear\{[^}]*top:calc\(env\(safe-area-inset-top,0px\)\+12px\)/.test(css) &&
           /#home\{[^}]*padding-top:calc\(env\(safe-area-inset-top,0px\)\+120px\)/.test(css)],
    ['やめる確認カードの余白にインセット',
      ()=> /\.quit-confirm\{[^}]*padding:max\(24px,env\(safe-area-inset-top,0px\)\)/.test(css)],
    ['新しい固定要素に env の付け忘れが無い', ()=>{
      const bad = [...css.matchAll(/([^{}]+)\{([^}]*)\}/g)]
        .filter(m => /position:fixed/.test(m[2]) && /(?:^|;)(?:top|bottom):-?\d/.test(m[2]))
        .map(m => m[1]);
      if(bad.length) console.log('    → env なしで上下に固定: ' + bad.join(' , '));
      return bad.length === 0;
    }],
  ];
  console.log('[セーフエリア] ステータスバー/ナビゲーションバーに隠れない');
  let ng = 0;
  for(const [name, fn] of cases){
    const ok = fn();
    console.log((ok ? '  OK  ' : '  NG  ') + name);
    if(!ok) ng++;
  }
  return ng;
}

vm.createContext(sandbox);
let done = false;
Promise.resolve(vm.runInContext(src, sandbox, { filename:'nou-soyogi-bundle.js' }))
  .then(()=>{
    done = true;
    const saNg = checkSafeArea();
    if(saNg){ console.log('SMOKE NG: セーフエリア ' + saNg + '件 失敗'); process.exit(1); }
    console.log('SMOKE OK: 起動＋(ホーム/設定3回/音トグル1回切替/いつもの/やめる/もういちど)＋記憶中断の回帰＋セーフエリア 例外なし');
    process.exit(0);
  })
  .catch(e=>{
    done = true;
    console.log('SMOKE NG:');
    console.log((e && e.stack ? e.stack : String(e)).split('\n').slice(0,6).join('\n'));
    process.exit(1);
  });
// 保険: 何かでハングしたら失敗扱い（回帰待ちの合計は約2.2秒）
setTimeout(()=>{ if(!done){ console.log('SMOKE NG: タイムアウト（非同期が完了しない）'); process.exit(1); } }, 8000).unref();
