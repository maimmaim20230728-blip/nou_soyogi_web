/* ③ ストループ効果テスト（判断力・抑制機能）
   ・round(ctx, opts, done) = 1問だけ出題
   ・色名は言語パック(LANG.colors)から。文字の“色”を選ぶ                */
const StroopGame = {
  id:'stroop', icon:'🖍️',
  round(ctx, opts, done){
    ctx.instruct(t('tapColor'));
    const pick = arr => arr[Math.floor(Math.random()*arr.length)];
    const byId = id => COLORS.find(c=>c.id===id);

    const wordC = pick(COLORS);
    let ink = pick(COLORS);
    while(ink.id === wordC.id) ink = pick(COLORS);   // 必ず不一致
    const inkId = ink.id;

    const opt = new Set([ink.id, wordC.id]);
    while(opt.size < 4) opt.add(pick(COLORS).id);
    const choices = [...opt].sort(()=>Math.random()-0.5);

    const word = (I18N.colors[wordC.id] || wordC.id);
    ctx.body.innerHTML =
      '<div class="stroop-word" style="color:'+ink.hex+'">'+word+'</div>' +
      '<div class="grid2" id="stroopChoices"></div>';
    const box = ctx.body.querySelector('#stroopChoices');
    let locked = false;
    choices.forEach(id=>{
      const c = byId(id);
      const btn = document.createElement('button');
      btn.className = 'swatch';
      btn.style.background = c.hex;
      btn.style.color = (id==='yellow') ? '#212121' : '#fff';
      btn.textContent = (I18N.colors[id] || id);
      btn.dataset.id = id;
      btn.onclick = ()=>{
        if(locked) return; locked = true;
        const ok = (id === inkId);
        reveal(box.querySelector('.swatch[data-id="'+inkId+'"]'), btn);
        Feedback.flash(ok, ()=> done(ok));
      };
      box.appendChild(btn);
    });
  }
};
