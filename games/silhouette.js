/* ④ シルエットクイズ（視空間認知）
   ・round(ctx, opts, done) = 1問だけ出題
   ・画像(OBJECTS[].img)があれば画像、無ければ絵文字を黒く塗って代用       */
const SilhouetteGame = {
  id:'silhouette', icon:'🧩',
  round(ctx, opts, done){
    ctx.instruct(t('whatIsThis'));
    const pick = arr => arr[Math.floor(Math.random()*arr.length)];
    function art(obj, silhouette){
      const cls = silhouette ? 'art sil' : 'art';
      if(obj.img) return '<img class="'+cls+'" src="'+obj.img+'" alt="">';
      return '<span class="'+cls+' emoji">'+obj.emoji+'</span>';
    }

    const target = pick(OBJECTS);
    const answerId = target.id;
    const set = new Set([target.id]);
    while(set.size < 3) set.add(pick(OBJECTS).id);
    const choices = [...set].sort(()=>Math.random()-0.5);

    ctx.body.innerHTML =
      '<div class="sil-stage">'+art(target, true)+'</div>' +
      '<div class="grid3" id="silChoices"></div>';
    const box = ctx.body.querySelector('#silChoices');
    let locked = false;
    choices.forEach(id=>{
      const obj = OBJECTS.find(o=>o.id===id);
      const btn = document.createElement('button');
      btn.className = 'obj-choice';
      btn.innerHTML = art(obj, false) +
        '<span class="obj-name">'+(I18N.objects[id] || id)+'</span>';
      btn.dataset.id = id;
      btn.onclick = ()=>{
        if(locked) return; locked = true;
        const ok = (id === answerId);
        reveal(box.querySelector('.obj-choice[data-id="'+answerId+'"]'), btn);
        Feedback.flash(ok, ()=> done(ok));
      };
      box.appendChild(btn);
    });
  }
};
