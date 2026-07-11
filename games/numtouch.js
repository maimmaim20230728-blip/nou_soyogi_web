/* ⑤ かずタッチ（トレイルメイキング：注意力・処理速度）
   ・round(ctx, opts, done) = 1ラウンド出題（1から順に全部タップしたら終了）
   ・通常=1〜5 / opts.hard=1〜8。数字ボタンは重ならないようランダム配置
   ・正しい順＝緑にして無効化＋正解音／間違い＝赤フラッシュ＋不正解音でミス記録
   ・ミス0なら正解、1以上なら不正解として done(ok) で返す（他ゲームと同じ形式）  */
const NumTouchGame = {
  id:'numtouch', icon:'🔢',
  round(ctx, opts, done){
    ctx.instruct(t('tapNumber'));
    const hard = !!opts.hard;
    const n = hard ? 8 : 5;
    const shuf = a => { a=a.slice();
      for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; }
      return a; };

    // プレイエリア（絶対配置で数字を散らす）
    ctx.body.innerHTML = '<div class="numtouch-stage" id="numStage"></div>';
    const stage = ctx.body.querySelector('#numStage');
    const W = stage.clientWidth  || 320;
    const H = stage.clientHeight || 400;

    // グリッドのセルに1個ずつ置けば必ず重ならない（セル内でランダムに揺らす）
    const cols = n <= 6 ? 2 : 3;
    const rows = Math.ceil(n / cols);
    const cellW = W / cols, cellH = H / rows;
    const cellMin = Math.min(cellW, cellH);
    // 最低64px・特大。ただしセルより必ず小さく（実機幅ではゆとりで64px以上・極小画面でも重ならない）
    const size = Math.min(Math.max(64, Math.floor(cellMin * 0.70)), Math.floor(cellMin) - 4);
    const cells = [];
    for(let c=0;c<cols*rows;c++) cells.push(c);
    const chosen = shuf(cells).slice(0, n);   // 使うセルをランダムに n 個えらぶ

    let nextNum = 1, miss = 0, cleared = 0;

    for(let num=1; num<=n; num++){
      const cell = chosen[num-1];
      const col = cell % cols, row = Math.floor(cell / cols);
      const freeX = Math.max(0, cellW - size), freeY = Math.max(0, cellH - size);
      const left = col*cellW + Math.random()*freeX;
      const top  = row*cellH + Math.random()*freeY;
      const b = document.createElement('button');
      b.className = 'num-btn';
      b.textContent = num;
      b.dataset.num = num;
      b.style.left = Math.round(left)+'px';
      b.style.top  = Math.round(top)+'px';
      b.style.width  = size+'px';
      b.style.height = size+'px';
      Tap.bind(b, ()=>{
        if(b.disabled) return;
        if(num === nextNum){                 // 正しい順にタップ
          b.disabled = true; b.classList.add('done');
          nextNum++; cleared++;
          if(cleared === n){                 // 全部そろった＝ラウンド終了
            const ok = (miss === 0);         // ミス0なら正解・1以上なら不正解
            Feedback.flash(ok, ()=> done(ok));
          } else {
            Sound.ok();                      // 途中の正解は軽く効果音
          }
        } else {                             // 順番ちがい＝ミスとして記録し続行
          miss++;
          Sound.ng();
          b.classList.remove('wrong'); void b.offsetWidth;   // アニメを再発火させる
          b.classList.add('wrong');
          setTimeout(()=>{ b.classList.remove('wrong'); }, 400);
        }
      }, {game:true});
      stage.appendChild(b);
    }
  }
};
