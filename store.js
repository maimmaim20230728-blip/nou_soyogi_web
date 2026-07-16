/* =========================================================
   記録の保存 ― localStorage（端末内・サーバー通信なし）
   records[YYYY-MM-DD] = { sessions:[ {mode,correct,total,games,at} ] }
   ・mode … 'usual'（いつもの）/ 'hard'（むずかしい）
   ・games … { calc:{c,t}, memory:{c,t}, ... }

   ▼永続性（オフライン・アプリ更新後も保持）の設計
   ・記録は localStorage（キー 'soyogi.records'）に保存。localStorageは
     Service Workerのキャッシュ(ファイル)とは別領域なので、SW更新やcache削除、
     アプリ(AAB)更新では消えない。Capacitorでも端末データとして更新間で保持される。
   ・キー名はアプリ版に依存しない固定値。コード内でこの記録を消去する処理は持たない。
   ・破損時も既存を極力守るため、読み書きは try/catch で保護。            */
const Store = (() => {
  const KEY = 'soyogi.records';

  function load(){
    try{ return JSON.parse(localStorage.getItem(KEY)) || {}; }
    catch(e){ return {}; }
  }
  function save(obj){
    try{ localStorage.setItem(KEY, JSON.stringify(obj)); }catch(e){ /* 保存失敗時も既存は保持 */ }
  }
  function keyOf(d){
    return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
  }

  return {
    keyOf,

    /* 1回のトレーニング結果を今日の記録に追加 */
    record(results, mode){
      const all = load();
      const day = keyOf(new Date());
      const row = all[day] || { sessions: [] };
      if(!row.sessions) row.sessions = [];
      const correct = results.reduce((s,r)=>s+r.correct,0);
      const total   = results.reduce((s,r)=>s+r.total,0);
      const games = {};
      results.forEach(r => games[r.game] = { c:r.correct, t:r.total });
      row.sessions.push({ mode: mode || 'usual', correct, total, games, at: Date.now() });
      all[day] = row;
      save(all);
      return row;
    },

    /* その日のデータ（無ければ null） */
    day(key){ return load()[key] || null; },

    /* その日のモード別プレイ回数 */
    counts(key){
      const r = load()[key]; let u=0, h=0;
      if(r && r.sessions) r.sessions.forEach(s => s.mode==='hard' ? h++ : u++);
      return { usual:u, hard:h };
    },

    /* その日の最高成績（星 1〜3・記録なしは0） */
    bestStars(key){
      const r = load()[key]; if(!r || !r.sessions) return 0;
      let best = 0;
      r.sessions.forEach(s=>{
        const ratio = s.total ? s.correct/s.total : 0;
        const st = ratio>=0.8 ? 3 : ratio>=0.5 ? 2 : 1;
        if(s.total && st > best) best = st;
      });
      return best;
    },

    /* これまでにプレイした「日数」 */
    totalDays(){ return Object.keys(load()).length; },

    /* これまでの総プレイ「回数」（全セッション数） */
    totalPlays(){
      const all = load(); let n = 0;
      Object.keys(all).forEach(k=>{ const r=all[k]; if(r && r.sessions) n += r.sessions.length; });
      return n;
    },

    /* 連続日数（今日から遡って途切れるまで）＝結果画面用（プレイ直後に呼ぶので今日起点でよい） */
    streak(){
      const all = load();
      let n = 0; const d = new Date();
      while(true){
        if(all[keyOf(d)]){ n++; d.setDate(d.getDate()-1); } else break;
      }
      return n;
    },

    /* 表示用の連続日数（ホーム用）＝今日まだプレイしていなければ昨日を起点に遡って数える。
       今日未プレイでも「連続が途切れて0」に見えないようにする（streak()はそのまま結果画面用に残す） */
    displayStreak(){
      const all = load();
      const d = new Date();
      if(!all[keyOf(d)]) d.setDate(d.getDate()-1);   // 今日の記録が無ければ昨日から数え始める
      let n = 0;
      while(all[keyOf(d)]){ n++; d.setDate(d.getDate()-1); }
      return n;
    },

    /* --- 設定 --- */
    getLang(){ return localStorage.getItem('soyogi.lang') || ''; },
    setLang(c){ localStorage.setItem('soyogi.lang', c); },
    getScale(){ return localStorage.getItem('soyogi.scale') || 'M'; },
    setScale(s){ localStorage.setItem('soyogi.scale', s); },
  };
})();
