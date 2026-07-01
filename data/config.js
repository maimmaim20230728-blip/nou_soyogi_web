/* =========================================================
   脳活アプリ・そよぎ  ―  共通設定データ
   ・言語に依存しない「色」「物」の定義をここに集約
   ・翻訳（名前）は data/lang.js 側で管理
   ========================================================= */

/* ---- 対応言語（15言語）。表示順＝この順番 ---- */
const LANGS = [
  { code:'ja',    label:'日本語' },
  { code:'en',    label:'English' },
  { code:'zh',    label:'中文(简体)' },
  { code:'zh-TW', label:'中文(繁體)' },
  { code:'ko',    label:'한국어' },
  { code:'es',    label:'Español' },
  { code:'pt',    label:'Português' },
  { code:'fr',    label:'Français' },
  { code:'de',    label:'Deutsch' },
  { code:'it',    label:'Italiano' },
  { code:'nl',    label:'Nederlands' },
  { code:'pl',    label:'Polski' },
  { code:'ru',    label:'Русский' },
  { code:'tr',    label:'Türkçe' },
  { code:'hi',    label:'हिन्दी' },
];

/* ---- ③ストループ用の色（名前は lang.js の colors[id]） ---- */
/* hex＝画面に塗る実際の色。text＝文字が読みやすいよう少し濃い版（黄色対策） */
const COLORS = [
  { id:'red',    hex:'#E53935', text:'#D32F2F' },
  { id:'blue',   hex:'#1E88E5', text:'#1565C0' },
  { id:'yellow', hex:'#FDD835', text:'#F9A825' },
  { id:'green',  hex:'#43A047', text:'#2E7D32' },
  { id:'black',  hex:'#212121', text:'#212121' },
  { id:'purple', hex:'#8E24AA', text:'#7B1FA2' },
];

/* ---- ④シルエット用の物（名前は lang.js の objects[id]） ----
   emoji … 画像が無い間の代替（黒く塗ってシルエット化）
   img   … ヒロさんがフリー素材を入れたら 'assets/silhouette/apple.png' のように設定
           img があれば img を優先、無ければ emoji を使う              */
const OBJECTS = [
  { id:'apple',    emoji:'🍎', img:'' },
  { id:'banana',   emoji:'🍌', img:'' },
  { id:'scissors', emoji:'✂️', img:'' },
  { id:'umbrella', emoji:'☂️', img:'' },
  { id:'key',      emoji:'🔑', img:'' },
  { id:'clock',    emoji:'⏰', img:'' },
  { id:'fish',     emoji:'🐟', img:'' },
  { id:'car',      emoji:'🚗', img:'' },
  { id:'house',    emoji:'🏠', img:'' },
  { id:'cup',      emoji:'☕', img:'' },
];
