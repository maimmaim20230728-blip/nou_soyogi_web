/* ① シンプル計算（ワーキングメモリ）
   ・round(ctx, opts, done) = 1問だけ出題し、正誤を done(ok) で返す
   ・opts.hard で 小さなかけ算・2桁の± を混ぜる（やさしい〜少し難しいのミックス）
   ・進捗/カウントは呼び出し側(app.js)が管理                              */
const CalcGame = {
  id:'calc', icon:'➕',
  round(ctx, opts, done){
    ctx.instruct('');
    const hard = !!opts.hard;
    const rnd = n => 1 + Math.floor(Math.random()*n);
    let a, b, op, answer;
    const roll = Math.random();
    if(hard && roll < 0.30){                 // 小さなかけ算
      op = '×'; a = 2 + Math.floor(Math.random()*4); b = rnd(9); answer = a * b;
    } else if(hard && roll < 0.60){           // 2桁の足し算・引き算
      op = Math.random() < 0.5 ? '+' : '-';
      a = 10 + Math.floor(Math.random()*20); b = rnd(15);
      if(op === '-' && b > a){ const t=a; a=b; b=t; }
      answer = (op === '+') ? a + b : a - b;
    } else {                                  // やさしい
      op = Math.random() < 0.5 ? '+' : '-';
      a = rnd(9); b = rnd(9);
      if(op === '-' && b > a){ const t=a; a=b; b=t; }
      answer = (op === '+') ? a + b : a - b;
    }

    // 選択肢：正解＋近い誤答3つ
    const spread = answer > 20 ? 6 : 3;
    const set = new Set([answer]);
    let guard = 0;
    while(set.size < 4 && guard++ < 60){
      const d = answer + (Math.floor(Math.random()*(spread*2+1)) - spread);
      if(d >= 0) set.add(d);
    }
    let fill = answer + 1;
    while(set.size < 4){ set.add(fill++); }
    const choices = [...set].sort(()=>Math.random()-0.5);

    ctx.body.innerHTML =
      '<div class="calc-q">'+a+' '+op+' '+b+' = ?</div>' +
      '<div class="grid2" id="calcChoices"></div>';
    const box = ctx.body.querySelector('#calcChoices');
    let locked = false;
    choices.forEach(n=>{
      const btn = document.createElement('button');
      btn.className = 'choice';
      btn.textContent = n;
      btn.onclick = ()=>{
        if(locked) return; locked = true;
        const ok = (n === answer);
        const correctEl = [...box.querySelectorAll('.choice')].find(b=>b.textContent==String(answer));
        reveal(correctEl, btn);
        Feedback.flash(ok, ()=> done(ok));
      };
      box.appendChild(btn);
    });
  }
};
