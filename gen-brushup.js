'use strict';
/* =========================================================
   ブラッシュアップ注入スクリプト(2026-07-11)
   ①シルエットお題 10→30種(config.js OBJECTS + lang.js objects×15言語)
   ②〜⑤用の新UI文言4種(gNumber/tapNumber/tapWordColor/moneyQ)×15言語
   使い方: node gen-brushup.js   (冪等ではないので1回だけ実行)
   ========================================================= */
const fs = require('fs');

const ORDER = ['ja','en','zh','zh-TW','ko','es','pt','fr','de','it','nl','pl','ru','tr','hi'];
const NEW_IDS = ['cat','dog','elephant','rabbit','turtle','butterfly','crab','octopus','rooster',
  'airplane','bicycle','train','yacht','phone','glasses','hat','shoe','glove','hammer','sunflower'];

const NEW_OBJECTS_CONFIG = [
  "  { id:'cat',       emoji:'🐈', img:'' },",
  "  { id:'dog',       emoji:'🐕', img:'' },",
  "  { id:'elephant',  emoji:'🐘', img:'' },",
  "  { id:'rabbit',    emoji:'🐇', img:'' },",
  "  { id:'turtle',    emoji:'🐢', img:'' },",
  "  { id:'butterfly', emoji:'🦋', img:'' },",
  "  { id:'crab',      emoji:'🦀', img:'' },",
  "  { id:'octopus',   emoji:'🐙', img:'' },",
  "  { id:'rooster',   emoji:'🐓', img:'' },",
  "  { id:'airplane',  emoji:'✈️', img:'' },",
  "  { id:'bicycle',   emoji:'🚲', img:'' },",
  "  { id:'train',     emoji:'🚂', img:'' },",
  "  { id:'yacht',     emoji:'⛵', img:'' },",
  "  { id:'phone',     emoji:'☎️', img:'' },",
  "  { id:'glasses',   emoji:'👓', img:'' },",
  "  { id:'hat',       emoji:'🎩', img:'' },",
  "  { id:'shoe',      emoji:'👞', img:'' },",
  "  { id:'glove',     emoji:'🧤', img:'' },",
  "  { id:'hammer',    emoji:'🔨', img:'' },",
  "  { id:'sunflower', emoji:'🌻', img:'' },"
].join('\n');

const OBJ = {
  ja:{cat:'ねこ',dog:'いぬ',elephant:'ぞう',rabbit:'うさぎ',turtle:'かめ',butterfly:'ちょう',crab:'かに',octopus:'たこ',rooster:'にわとり',airplane:'ひこうき',bicycle:'じてんしゃ',train:'きかんしゃ',yacht:'ヨット',phone:'でんわ',glasses:'めがね',hat:'ぼうし',shoe:'くつ',glove:'てぶくろ',hammer:'かなづち',sunflower:'ひまわり'},
  en:{cat:'Cat',dog:'Dog',elephant:'Elephant',rabbit:'Rabbit',turtle:'Turtle',butterfly:'Butterfly',crab:'Crab',octopus:'Octopus',rooster:'Rooster',airplane:'Airplane',bicycle:'Bicycle',train:'Train',yacht:'Sailboat',phone:'Telephone',glasses:'Glasses',hat:'Hat',shoe:'Shoe',glove:'Gloves',hammer:'Hammer',sunflower:'Sunflower'},
  zh:{cat:'猫',dog:'狗',elephant:'大象',rabbit:'兔子',turtle:'乌龟',butterfly:'蝴蝶',crab:'螃蟹',octopus:'章鱼',rooster:'公鸡',airplane:'飞机',bicycle:'自行车',train:'火车',yacht:'帆船',phone:'电话',glasses:'眼镜',hat:'帽子',shoe:'鞋',glove:'手套',hammer:'锤子',sunflower:'向日葵'},
  'zh-TW':{cat:'貓',dog:'狗',elephant:'大象',rabbit:'兔子',turtle:'烏龜',butterfly:'蝴蝶',crab:'螃蟹',octopus:'章魚',rooster:'公雞',airplane:'飛機',bicycle:'腳踏車',train:'火車',yacht:'帆船',phone:'電話',glasses:'眼鏡',hat:'帽子',shoe:'鞋',glove:'手套',hammer:'鎚子',sunflower:'向日葵'},
  ko:{cat:'고양이',dog:'개',elephant:'코끼리',rabbit:'토끼',turtle:'거북이',butterfly:'나비',crab:'게',octopus:'문어',rooster:'수탉',airplane:'비행기',bicycle:'자전거',train:'기차',yacht:'돛단배',phone:'전화기',glasses:'안경',hat:'모자',shoe:'신발',glove:'장갑',hammer:'망치',sunflower:'해바라기'},
  es:{cat:'Gato',dog:'Perro',elephant:'Elefante',rabbit:'Conejo',turtle:'Tortuga',butterfly:'Mariposa',crab:'Cangrejo',octopus:'Pulpo',rooster:'Gallo',airplane:'Avión',bicycle:'Bicicleta',train:'Tren',yacht:'Velero',phone:'Teléfono',glasses:'Gafas',hat:'Sombrero',shoe:'Zapato',glove:'Guantes',hammer:'Martillo',sunflower:'Girasol'},
  pt:{cat:'Gato',dog:'Cachorro',elephant:'Elefante',rabbit:'Coelho',turtle:'Tartaruga',butterfly:'Borboleta',crab:'Caranguejo',octopus:'Polvo',rooster:'Galo',airplane:'Avião',bicycle:'Bicicleta',train:'Trem',yacht:'Veleiro',phone:'Telefone',glasses:'Óculos',hat:'Chapéu',shoe:'Sapato',glove:'Luvas',hammer:'Martelo',sunflower:'Girassol'},
  fr:{cat:'Chat',dog:'Chien',elephant:'Éléphant',rabbit:'Lapin',turtle:'Tortue',butterfly:'Papillon',crab:'Crabe',octopus:'Poulpe',rooster:'Coq',airplane:'Avion',bicycle:'Vélo',train:'Train',yacht:'Voilier',phone:'Téléphone',glasses:'Lunettes',hat:'Chapeau',shoe:'Chaussure',glove:'Gants',hammer:'Marteau',sunflower:'Tournesol'},
  de:{cat:'Katze',dog:'Hund',elephant:'Elefant',rabbit:'Hase',turtle:'Schildkröte',butterfly:'Schmetterling',crab:'Krabbe',octopus:'Krake',rooster:'Hahn',airplane:'Flugzeug',bicycle:'Fahrrad',train:'Zug',yacht:'Segelboot',phone:'Telefon',glasses:'Brille',hat:'Hut',shoe:'Schuh',glove:'Handschuhe',hammer:'Hammer',sunflower:'Sonnenblume'},
  it:{cat:'Gatto',dog:'Cane',elephant:'Elefante',rabbit:'Coniglio',turtle:'Tartaruga',butterfly:'Farfalla',crab:'Granchio',octopus:'Polpo',rooster:'Gallo',airplane:'Aereo',bicycle:'Bicicletta',train:'Treno',yacht:'Barca a vela',phone:'Telefono',glasses:'Occhiali',hat:'Cappello',shoe:'Scarpa',glove:'Guanti',hammer:'Martello',sunflower:'Girasole'},
  nl:{cat:'Kat',dog:'Hond',elephant:'Olifant',rabbit:'Konijn',turtle:'Schildpad',butterfly:'Vlinder',crab:'Krab',octopus:'Octopus',rooster:'Haan',airplane:'Vliegtuig',bicycle:'Fiets',train:'Trein',yacht:'Zeilboot',phone:'Telefoon',glasses:'Bril',hat:'Hoed',shoe:'Schoen',glove:'Handschoenen',hammer:'Hamer',sunflower:'Zonnebloem'},
  pl:{cat:'Kot',dog:'Pies',elephant:'Słoń',rabbit:'Królik',turtle:'Żółw',butterfly:'Motyl',crab:'Krab',octopus:'Ośmiornica',rooster:'Kogut',airplane:'Samolot',bicycle:'Rower',train:'Pociąg',yacht:'Żaglówka',phone:'Telefon',glasses:'Okulary',hat:'Kapelusz',shoe:'But',glove:'Rękawiczki',hammer:'Młotek',sunflower:'Słonecznik'},
  ru:{cat:'Кошка',dog:'Собака',elephant:'Слон',rabbit:'Кролик',turtle:'Черепаха',butterfly:'Бабочка',crab:'Краб',octopus:'Осьминог',rooster:'Петух',airplane:'Самолёт',bicycle:'Велосипед',train:'Поезд',yacht:'Парусник',phone:'Телефон',glasses:'Очки',hat:'Шляпа',shoe:'Ботинок',glove:'Перчатки',hammer:'Молоток',sunflower:'Подсолнух'},
  tr:{cat:'Kedi',dog:'Köpek',elephant:'Fil',rabbit:'Tavşan',turtle:'Kaplumbağa',butterfly:'Kelebek',crab:'Yengeç',octopus:'Ahtapot',rooster:'Horoz',airplane:'Uçak',bicycle:'Bisiklet',train:'Tren',yacht:'Yelkenli',phone:'Telefon',glasses:'Gözlük',hat:'Şapka',shoe:'Ayakkabı',glove:'Eldiven',hammer:'Çekiç',sunflower:'Ayçiçeği'},
  hi:{cat:'बिल्ली',dog:'कुत्ता',elephant:'हाथी',rabbit:'खरगोश',turtle:'कछुआ',butterfly:'तितली',crab:'केकड़ा',octopus:'ऑक्टोपस',rooster:'मुर्गा',airplane:'हवाई जहाज़',bicycle:'साइकिल',train:'रेलगाड़ी',yacht:'पाल नाव',phone:'टेलीफ़ोन',glasses:'चश्मा',hat:'टोपी',shoe:'जूता',glove:'दस्ताने',hammer:'हथौड़ा',sunflower:'सूरजमुखी'}
};

const UI = {
  ja:{gNumber:'かずタッチ',tapNumber:'1から じゅんばんに タップしてね',tapWordColor:'ことばが あらわす「いろ」を えらんでね',moneyQ:'{price}えんの かいもの。{pay}えんで はらうと、おつりは？'},
  en:{gNumber:'Tap 1-2-3',tapNumber:'Tap the numbers in order, from 1',tapWordColor:'Tap the color the word MEANS',moneyQ:'It costs {price} coins. You pay {pay}. How much change?'},
  zh:{gNumber:'数字点点',tapNumber:'请从1开始按顺序点',tapWordColor:'请点「字的意思」的颜色',moneyQ:'买东西花{price}枚金币，付了{pay}枚。找零多少？'},
  'zh-TW':{gNumber:'數字點點',tapNumber:'請從1開始按順序點',tapWordColor:'請點「字的意思」的顏色',moneyQ:'買東西花{price}枚金幣，付了{pay}枚。找零多少？'},
  ko:{gNumber:'숫자 터치',tapNumber:'1부터 순서대로 눌러 주세요',tapWordColor:'글자가 뜻하는 색을 눌러 주세요',moneyQ:'{price}코인짜리 물건을 {pay}코인 내고 사요. 거스름돈은?'},
  es:{gNumber:'Toca 1-2-3',tapNumber:'Toca los números en orden desde el 1',tapWordColor:'Toca el color que SIGNIFICA la palabra',moneyQ:'Cuesta {price} monedas y pagas {pay}. ¿Cuánto es el cambio?'},
  pt:{gNumber:'Toque 1-2-3',tapNumber:'Toque nos números em ordem, do 1 em diante',tapWordColor:'Toque na cor que a palavra SIGNIFICA',moneyQ:'Custa {price} moedas e você paga {pay}. Quanto é o troco?'},
  fr:{gNumber:'Touche 1-2-3',tapNumber:"Touche les nombres dans l'ordre, à partir de 1",tapWordColor:'Touche la couleur que le mot SIGNIFIE',moneyQ:'Ça coûte {price} pièces, tu paies {pay}. Combien de monnaie ?'},
  de:{gNumber:'Tipp 1-2-3',tapNumber:'Tippe die Zahlen der Reihe nach, ab 1',tapWordColor:'Tippe die Farbe, die das Wort BEDEUTET',moneyQ:'Es kostet {price} Münzen, du zahlst {pay}. Wie viel Rückgeld?'},
  it:{gNumber:'Tocca 1-2-3',tapNumber:'Tocca i numeri in ordine, partendo da 1',tapWordColor:'Tocca il colore che la parola SIGNIFICA',moneyQ:'Costa {price} monete e paghi {pay}. Quanto è il resto?'},
  nl:{gNumber:'Tik 1-2-3',tapNumber:'Tik de cijfers op volgorde aan, vanaf 1',tapWordColor:'Tik op de kleur die het woord BETEKENT',moneyQ:'Het kost {price} munten, je betaalt {pay}. Hoeveel wisselgeld?'},
  pl:{gNumber:'Dotknij 1-2-3',tapNumber:'Dotykaj liczb po kolei, zaczynając od 1',tapWordColor:'Dotknij koloru, który OZNACZA słowo',moneyQ:'Kosztuje {price} monet, płacisz {pay}. Ile reszty?'},
  ru:{gNumber:'Нажми 1-2-3',tapNumber:'Нажимай числа по порядку, начиная с 1',tapWordColor:'Нажми цвет, который ОЗНАЧАЕТ слово',moneyQ:'Товар стоит {price} монет, ты платишь {pay}. Сколько сдачи?'},
  tr:{gNumber:'Dokun 1-2-3',tapNumber:"1'den başlayarak sayılara sırayla dokun",tapWordColor:'Kelimenin ANLAMI olan renge dokun',moneyQ:'{price} coin tutuyor, {pay} coin ödüyorsun. Para üstü kaç?'},
  hi:{gNumber:'1-2-3 छुएँ',tapNumber:'1 से शुरू करके क्रम में संख्याएँ छुएँ',tapWordColor:'शब्द का जो रंग मतलब है, उसे छुएँ',moneyQ:'कीमत {price} सिक्के है, आप {pay} सिक्के देते हैं। कितने वापस?'}
};

const esc = (s) => s.replace(/\\/g, '\\\\').replace(/'/g, "\\'");

/* ---- config.js: OBJECTS へ20種追加 ---- */
let conf = fs.readFileSync('./data/config.js', 'utf8');
if (conf.includes("id:'cat'")) { console.log('config.js: 追加済みのためスキップ'); }
else {
  conf = conf.replace(/(\{ id:'cup',[^\n]*\n)\];/, '$1' + NEW_OBJECTS_CONFIG + '\n];');
  fs.writeFileSync('./data/config.js', conf);
  console.log('config.js: OBJECTS +20 OK');
}

/* ---- lang.js: objects20種 + ui4キー を全15言語へ ---- */
let lang = fs.readFileSync('./data/lang.js', 'utf8');
if (lang.includes('gNumber')) { console.log('lang.js: 追加済みのためスキップ'); process.exit(0); }

let iObj = 0;
lang = lang.replace(/objects:\{([^}]*)\}/g, (m, body) => {
  if (!body.includes(":'")) return m; // 冒頭コメント内の objects:{…} を除外
  const code = ORDER[iObj++];
  const t = OBJ[code];
  const add = NEW_IDS.map(id => `${id}:'${esc(t[id])}'`).join(', ');
  return 'objects:{' + body.replace(/\s+$/, '') + ',\n      ' + add + ' }';
});
if (iObj !== 15) { console.error('NG: objectsブロックが15個ではない(' + iObj + ')'); process.exit(1); }

let iUi = 0;
lang = lang.replace(/gShape:\s*'([^']*)'\s*\}/g, (m, shape) => {
  const code = ORDER[iUi++];
  const t = UI[code];
  return `gShape:'${esc(shape)}', gNumber:'${esc(t.gNumber)}',\n      tapNumber:'${esc(t.tapNumber)}',\n      tapWordColor:'${esc(t.tapWordColor)}',\n      moneyQ:'${esc(t.moneyQ)}' }`;
});
if (iUi !== 15) { console.error('NG: uiブロック(gShape)が15個ではない(' + iUi + ')'); process.exit(1); }

fs.writeFileSync('./data/lang.js', lang);
console.log('lang.js: objects+20/ui+4 を15言語へ注入 OK');
