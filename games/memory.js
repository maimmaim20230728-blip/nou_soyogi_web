/* ② 順番記憶ゲーム（短期記憶）― サイモン形式
   ・round(ctx, opts, done) = 1トライアル（1問）だけ出題
   ・opts.seqLen で覚える長さを指定（呼び出し側が問ごとに +1 していく）
   ・opts.hard で点滅を少し速く
   ・入力中は「もういちど みる」で同じ並びをもう一度だけ提示できる（1問1回・正誤の扱いは不変） */
const MemoryGame = {
  id:'memory', icon:'🎨',
  round(ctx, opts, done){
    const hard = !!opts.hard;
    const litMs = hard ? 430 : 520;
    const len = opts.seqLen || 3;
    const pads = ['#E53935','#1E88E5','#FDD835','#43A047']; // 赤・青・黄・緑
    const sleep = ms => new Promise(r => setTimeout(r, ms));
    // このラウンドが現行世代か（「やめる」中断後は false）。ctx.alive が無い環境では常に生きているとみなす
    const alive = () => (ctx.alive ? ctx.alive() : true);

    ctx.body.innerHTML = '<div class="pad-wrap"><div class="pads" id="pads"></div>'
      + '<button class="mem-again" id="memAgain" hidden></button></div>';
    const wrap = ctx.body.querySelector('#pads');
    const againBtn = ctx.body.querySelector('#memAgain');
    againBtn.textContent = t('watchAgain');
    const els = pads.map((c,idx)=>{
      const d = document.createElement('button');
      d.className = 'pad'; d.style.background = c; d.dataset.i = idx;
      wrap.appendChild(d); return d;
    });

    const seq = [];
    for(let k=0;k<len;k++) seq.push(Math.floor(Math.random()*4));

    async function light(idx){
      if(!alive()) return;              // 中断後は提示を止める（Sound.padも鳴らさない）
      Sound.pad(idx);
      els[idx].classList.add('lit');  await sleep(litMs);
      els[idx].classList.remove('lit'); await sleep(220);
    }
    function setEnabled(on){ els.forEach(el=>{ el.disabled = !on; el.classList.toggle('off', !on); }); }
    function flashPad(el){ el.classList.add('lit'); setTimeout(()=>el.classList.remove('lit'), 200); }

    let pos = 0, finished = false, hintUsed = false, replaying = false;

    // 「見せる」提示を関数化：初回もヒント（もういちど みる）も同じ処理を使い、終わったら入力位置をリセット
    async function present(){
      replaying = true;
      ctx.instruct(t('watch'));
      setEnabled(false);
      await sleep(600);
      for(const idx of seq){ if(finished || !alive()) break; await light(idx); }
      replaying = false;
      if(finished || !alive()) return;   // 中断後は yourTurn 表示も入力有効化もしない（共有DOMを汚さない）
      ctx.instruct(t('yourTurn'));
      pos = 0;                 // 入力位置をリセット（ヒント後も最初から）
      setEnabled(true);
    }

    // ヒント「もういちど みる」：入力フェーズ中のみ・1問につき1回だけ（使用後は無効化＋非表示）
    Tap.bind(againBtn, ()=>{
      if(hintUsed || replaying || finished) return;
      hintUsed = true;
      againBtn.disabled = true; againBtn.hidden = true;
      present();
    });

    // パッド入力（正誤の判定・扱いは従来どおり）
    els.forEach(el => Tap.bind(el, (e)=>{
      if(finished || replaying) return;
      const idx = +e.currentTarget.dataset.i;
      Sound.pad(idx); flashPad(e.currentTarget);
      if(idx === seq[pos]){
        pos++;
        if(pos === seq.length){ finished = true; setEnabled(false); againBtn.hidden = true; Feedback.flash(true, ()=> done(true)); }
      } else {
        finished = true; setEnabled(false); againBtn.hidden = true; Feedback.flash(false, ()=> done(false));
      }
    }, {game:true, silent:true}));   // パッドは色ごとの音(pad)が本体＝押下tap音は鳴らさない(520Hzはドの523Hzと紛らわしく記憶の邪魔)

    (async function(){
      await present();
      // 入力フェーズに入ったらヒントボタンを出す（まだ使っておらず、まだ終わっていないとき）
      if(!hintUsed && !finished) againBtn.hidden = false;
    })();
  }
};
