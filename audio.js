/* =========================================================
   音 ― すべて Web Audio で合成（音声ファイル不要＝完全オフライン）
   ・Sound … 効果音（正解/不正解/ボタン/点滅/結果）
   ・Bgm   … BGM。画面で雰囲気を出し分け：
             title … タイトル系（ホーム/モード/結果）＝明るく弾むポップ
             game  … ゲーム中＝あたたかく軽快なグルーヴ（穏やかすぎない）
   ========================================================= */

/* 共有 AudioContext */
const _AC = window.AudioContext || window.webkitAudioContext;
let _ac = null;
function audioCtx(){
  if(!_ac && _AC) _ac = new _AC();
  if(_ac && _ac.state === 'suspended' && _ac.resume) _ac.resume();  // 操作をきっかけに解禁
  return _ac;
}

/* ===================== 効果音 ===================== */
const Sound = (() => {
  let enabled = (localStorage.getItem('soyogi.sound') !== 'off');

  function tone(freq, dur, type='sine', when=0, vol=0.2){
    if(!enabled) return;
    const c = audioCtx(); if(!c) return;
    const t = c.currentTime + when;
    const o = c.createOscillator(), g = c.createGain();
    o.type = type; o.frequency.value = freq;
    o.connect(g); g.connect(c.destination);
    g.gain.setValueAtTime(vol, t);
    g.gain.exponentialRampToValueAtTime(0.001, t + dur);
    o.start(t); o.stop(t + dur);
  }

  return {
    get enabled(){ return enabled; },
    toggle(){
      enabled = !enabled;
      localStorage.setItem('soyogi.sound', enabled ? 'on' : 'off');
      if(enabled) this.tap();
      return enabled;
    },
    unlock(){ audioCtx(); },
    ok(){ tone(660,0.12,'sine',0); tone(990,0.20,'sine',0.11); },
    ng(){ tone(160,0.35,'square'); },
    tap(){ tone(520,0.06,'sine',0,0.12); },
    pad(i){ tone([392,523,659,784][i%4],0.28,'sine',0,0.22); },
    fanfare(){ [523,659,784,1046].forEach((f,i)=>tone(f,0.22,'triangle',i*0.12,0.22)); },
  };
})();

/* ===================== BGM（title / game・どちらも軽快） ===================== */
const Bgm = (() => {
  let enabled = (localStorage.getItem('soyogi.bgm') !== 'off');
  let bus = null, filter = null, timer = null, step = 0, playing = false, pending = false;
  let mood = 'title';                        // 最初（タイトル）は明るいポップ

  /* --- title（明るく弾むポップ：C-G-Am-F） --- */
  const TITLE_CH = [
    [261.63,329.63,392.00,523.25], [196.00,246.94,293.66,392.00],
    [220.00,261.63,329.63,440.00], [174.61,220.00,261.63,349.23],
  ];
  const TITLE_BASS = [130.81, 98.00, 110.00, 87.31];
  const TITLE_MS = 240;                      // きびきび

  /* --- game（あたたかく軽快なグルーヴ：C-Am-F-G・まろやか） --- */
  const GAME_CH = [
    [261.63,329.63,392.00,523.25], [220.00,261.63,329.63,440.00],
    [174.61,220.00,261.63,349.23], [196.00,246.94,293.66,392.00],
  ];
  const GAME_BASS = [130.81, 110.00, 87.31, 98.00];
  const GAME_MS = 300;                       // 少しゆったり＝でも歩くリズム感

  /* --- history（記録画面：あたたかく振り返る・やさしいチャイム） C-Em-Am-F --- */
  const HIST_CH = [
    [261.63,329.63,392.00,523.25], [164.81,196.00,246.94,329.63],
    [220.00,261.63,329.63,440.00], [174.61,220.00,261.63,349.23],
  ];
  const HIST_BASS = [130.81, 82.41, 110.00, 87.31];
  const HIST_MS = 360;

  function ensureBus(c){
    if(bus) return;
    bus = c.createGain(); bus.gain.value = 0.0;
    filter = c.createBiquadFilter(); filter.type='lowpass'; filter.Q.value=0.6;
    bus.connect(filter); filter.connect(c.destination);
  }
  function setFilter(){ if(filter) filter.frequency.value = (mood==='title') ? 3200 : (mood==='history') ? 1900 : 2200; }

  // 長い音（パッド／つなぎ）
  function pad(freq, start, dur, peak, type='sine'){
    const c=_ac, o=c.createOscillator(), g=c.createGain();
    o.type=type; o.frequency.value=freq; o.connect(g); g.connect(bus);
    g.gain.setValueAtTime(0.0001,start);
    g.gain.linearRampToValueAtTime(peak,start+0.5);
    g.gain.setValueAtTime(peak,Math.max(start+0.5,start+dur-0.8));
    g.gain.linearRampToValueAtTime(0.0001,start+dur);
    o.start(start); o.stop(start+dur+0.05);
  }
  // 短い音（つまびき）
  function pluck(freq, dur, peak, type='triangle'){
    const c=_ac, t=c.currentTime+0.02, o=c.createOscillator(), g=c.createGain();
    o.type=type; o.frequency.value=freq; o.connect(g); g.connect(bus);
    g.gain.setValueAtTime(0.0001,t);
    g.gain.linearRampToValueAtTime(peak,t+0.02);
    g.gain.exponentialRampToValueAtTime(0.0001,t+dur);
    o.start(t); o.stop(t+dur+0.02);
  }

  // タイトル：明るくキラッと
  function titleStep(){
    if(!playing||!_ac) return;
    const ci=Math.floor(step/4)%TITLE_CH.length, ch=TITLE_CH[ci], s=step%4;
    pluck(ch[s], 0.26, 0.05, 'triangle');
    if(s===0){
      pluck(TITLE_BASS[ci], 0.5, 0.07, 'sine');
      pad(ch[0], _ac.currentTime+0.02, 0.95, 0.02, 'sine');
      pad(ch[0]*2, _ac.currentTime+0.02, 0.55, 0.035, 'triangle');
    }
    if(s===2) pluck(ch[3], 0.22, 0.04, 'triangle');
    step++;
  }
  // ゲーム：あたたかく歩くグルーヴ（丸いサイン中心）
  function gameStep(){
    if(!playing||!_ac) return;
    const ci=Math.floor(step/4)%GAME_CH.length, ch=GAME_CH[ci], s=step%4;
    pluck(ch[s], 0.30, 0.05, 'sine');                     // まろやかなアルペジオ
    if(s===0){
      pluck(GAME_BASS[ci], 0.6, 0.07, 'sine');            // やさしいベース
      pad(ch[0], _ac.currentTime+0.02, 1.15, 0.025, 'sine');   // あたたかいつなぎ
      pad(ch[1], _ac.currentTime+0.02, 1.15, 0.02, 'sine');
    }
    if(s===2) pluck(ch[2], 0.26, 0.04, 'sine');           // 合いの手
    step++;
  }

  // 記録画面：あたたかく振り返るグルーヴ＋やさしいチャイム
  function historyStep(){
    if(!playing||!_ac) return;
    const ci=Math.floor(step/4)%HIST_CH.length, ch=HIST_CH[ci], s=step%4;
    pluck(ch[s], 0.34, 0.05, 'sine');
    if(s===0){
      pluck(HIST_BASS[ci], 0.7, 0.06, 'sine');
      pad(ch[0], _ac.currentTime+0.02, 1.3, 0.025, 'sine');
      pad(ch[2], _ac.currentTime+0.02, 1.3, 0.02, 'sine');
      pluck(ch[0]*2, 0.5, 0.03, 'triangle');    // やさしいチャイム
    }
    step++;
  }

  function schedule(){
    if(timer){ clearInterval(timer); timer=null; }
    const fn = (mood==='title') ? titleStep : (mood==='history') ? historyStep : gameStep;
    const ms = (mood==='title') ? TITLE_MS : (mood==='history') ? HIST_MS : GAME_MS;
    fn();                                     // すぐ1回鳴らす
    timer = setInterval(fn, ms);
  }
  function begin(c){
    ensureBus(c); setFilter();
    playing = true; step = 0;
    bus.gain.cancelScheduledValues(c.currentTime);
    bus.gain.setValueAtTime(bus.gain.value, c.currentTime);
    bus.gain.linearRampToValueAtTime(0.55, c.currentTime + 1.0);
    schedule();
  }

  function start(){
    if(!enabled || playing) return;
    const c = audioCtx(); if(!c) return;
    if(c.state === 'running'){ begin(c); }
    else { pending = true; c.onstatechange = () => { if(c.state === 'running' && pending && enabled){ pending = false; begin(c); } }; }
  }
  function stop(){
    pending = false; playing = false;
    if(timer){ clearInterval(timer); timer = null; }
    if(bus && _ac){
      bus.gain.cancelScheduledValues(_ac.currentTime);
      bus.gain.setValueAtTime(bus.gain.value, _ac.currentTime);
      bus.gain.linearRampToValueAtTime(0.0001, _ac.currentTime + 0.4);
    }
  }
  function setMood(m){                         // 画面に応じて雰囲気を切替
    if(m === mood) return;
    mood = m; setFilter();
    if(playing) schedule();
  }

  return {
    get enabled(){ return enabled; },
    start, stop, setMood,
    toggle(){
      enabled = !enabled;
      localStorage.setItem('soyogi.bgm', enabled ? 'on' : 'off');
      if(enabled) start(); else stop();
      return enabled;
    },
  };
})();
