/* ③ ストループ効果テスト（判断力・抑制機能）
   ・round(ctx, opts, done) = 1問だけ出題
   ・色名は言語パック(LANG.colors)から。文字の“色”を選ぶ
   ・opts.hard … 選択肢を6択（全色）にし、約30%を「逆ストループ」に
     （逆＝単語が“意味する色”を答える。通常は“インクの色”を答える）        */
const StroopGame = {
  id:'stroop', icon:'🖍️',
  round(ctx, opts, done){
    const hard = !!opts.hard;
    const reverse = hard && Math.random() < 0.30;    // むずかしいの約30%＝逆ストループ
    ctx.instruct(reverse ? t('tapWordColor') : t('tapColor'));  // 逆＝意味の色 / 通常＝インクの色
    const pick = arr => arr[Math.floor(Math.random()*arr.length)];
    const byId = id => COLORS.find(c=>c.id===id);

    const wordC = pick(COLORS);
    let ink = pick(COLORS);
    while(ink.id === wordC.id) ink = pick(COLORS);   // インク色と単語の意味は必ず不一致
    const inkId = ink.id;
    const answerId = reverse ? wordC.id : inkId;      // 逆＝単語の意味の色 / 通常＝インクの色

    const nChoices = hard ? 6 : 4;                    // むずかしいは6択（全色）
    const opt = new Set([ink.id, wordC.id]);
    while(opt.size < nChoices) opt.add(pick(COLORS).id);
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
      Tap.bind(btn, ()=>{
        if(locked) return; locked = true;
        const ok = (id === answerId);
        reveal(box.querySelector('.swatch[data-id="'+answerId+'"]'), btn);
        Feedback.flash(ok, ()=> done(ok));
      }, {game:true});
      box.appendChild(btn);
    });
  }
};
