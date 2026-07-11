/* ① シンプル計算（ワーキングメモリ）
   ・round(ctx, opts, done) = 1問だけ出題し、正誤を done(ok) で返す
   ・opts.hard で 小さなかけ算・2桁の± を混ぜる（やさしい〜少し難しいのミックス）
   ・約25%で「おかね（お釣り）問題」を混ぜる（生活に近い計算）
   ・進捗/カウントは呼び出し側(app.js)が管理                              */
const CalcGame = {
  id:'calc', icon:'➕',
  round(ctx, opts, done){
    ctx.instruct('');
    const hard = !!opts.hard;
    const rnd = n => 1 + Math.floor(Math.random()*n);

    let answer, qHtml, choices;

    if(Math.random() < 0.25){                 // ===== おかね（お釣り）問題 =====
      let pay, price;
      if(hard){
        pay = Math.random() < 0.5 ? 500 : 1000;
        price = 11 + Math.floor(Math.random() * (pay - 11));       // 11〜pay-1 の任意
      } else {
        pay = Math.random() < 0.5 ? 100 : 500;
        price = 10 * (1 + Math.floor(Math.random() * ((pay - 10) / 10)));  // 10の倍数：10〜pay-10
      }
      answer = pay - price;                    // お釣り

      const q = (I18N.ui.moneyQ || '{price} / {pay}')
        .replace('{price}', price).replace('{pay}', pay);
      qHtml = '<div class="calc-q money">'+q+'</div>';

      // 選択肢：正解＋10きざみのもっともらしい誤答（0超〜pay・負や重複なし）
      const set = new Set([answer]);
      let guard = 0;
      while(set.size < 4 && guard++ < 120){
        const d = answer + (Math.floor(Math.random()*4)+1) * 10 * (Math.random()<0.5?-1:1);
        if(d > 0 && d <= pay) set.add(d);
      }
      let fill = answer + 10, fg = 0;          // 足りない時の保険（10きざみで埋める）
      while(set.size < 4 && fg++ < 200){ if(fill > 0 && fill <= pay && fill !== answer) set.add(fill); fill += 10; }
      let d2 = 1;                              // 最終保険
      while(set.size < 4){ if(answer + d2 > 0) set.add(answer + d2); d2++; }
      choices = [...set].sort(()=>Math.random()-0.5);

    } else {                                   // ===== 通常の計算（従来ロジック・変更なし） =====
      let a, b, op;
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
      qHtml = '<div class="calc-q">'+a+' '+op+' '+b+' = ?</div>';

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
      choices = [...set].sort(()=>Math.random()-0.5);
    }

    ctx.body.innerHTML =
      qHtml +
      '<div class="grid2" id="calcChoices"></div>';
    const box = ctx.body.querySelector('#calcChoices');
    let locked = false;
    choices.forEach(n=>{
      const btn = document.createElement('button');
      btn.className = 'choice';
      btn.textContent = n;
      Tap.bind(btn, ()=>{
        if(locked) return; locked = true;
        const ok = (n === answer);
        const correctEl = [...box.querySelectorAll('.choice')].find(b=>b.textContent==String(answer));
        reveal(correctEl, btn);
        Feedback.flash(ok, ()=> done(ok));
      }, {game:true});
      box.appendChild(btn);
    });
  }
};
