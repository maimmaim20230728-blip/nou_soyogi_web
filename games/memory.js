/* ② 順番記憶ゲーム（短期記憶）― サイモン形式
   ・round(ctx, opts, done) = 1トライアル（1問）だけ出題
   ・opts.seqLen で覚える長さを指定（呼び出し側が問ごとに +1 していく）
   ・opts.hard で点滅を少し速く                                          */
const MemoryGame = {
  id:'memory', icon:'🎨',
  round(ctx, opts, done){
    const hard = !!opts.hard;
    const litMs = hard ? 430 : 520;
    const len = opts.seqLen || 3;
    const pads = ['#E53935','#1E88E5','#FDD835','#43A047']; // 赤・青・黄・緑
    const sleep = ms => new Promise(r => setTimeout(r, ms));

    ctx.body.innerHTML = '<div class="pad-wrap"><div class="pads" id="pads"></div></div>';
    const wrap = ctx.body.querySelector('#pads');
    const els = pads.map((c,idx)=>{
      const d = document.createElement('button');
      d.className = 'pad'; d.style.background = c; d.dataset.i = idx;
      wrap.appendChild(d); return d;
    });

    const seq = [];
    for(let k=0;k<len;k++) seq.push(Math.floor(Math.random()*4));

    async function light(idx){
      Sound.pad(idx);
      els[idx].classList.add('lit');  await sleep(litMs);
      els[idx].classList.remove('lit'); await sleep(220);
    }
    function setEnabled(on){ els.forEach(el=>{ el.disabled = !on; el.classList.toggle('off', !on); }); }
    function flashPad(el){ el.classList.add('lit'); setTimeout(()=>el.classList.remove('lit'), 200); }

    (async function(){
      // 見せる
      ctx.instruct(t('watch'));
      setEnabled(false);
      await sleep(600);
      for(const idx of seq) await light(idx);
      // 入力
      ctx.instruct(t('yourTurn'));
      setEnabled(true);
      let pos = 0, finished = false;
      els.forEach(el => el.onclick = (e)=>{
        if(finished) return;
        const idx = +e.currentTarget.dataset.i;
        Sound.pad(idx); flashPad(e.currentTarget);
        if(idx === seq[pos]){
          pos++;
          if(pos === seq.length){ finished = true; setEnabled(false); Feedback.flash(true, ()=> done(true)); }
        } else {
          finished = true; setEnabled(false); Feedback.flash(false, ()=> done(false));
        }
      });
    })();
  }
};
