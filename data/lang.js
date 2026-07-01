/* =========================================================
   脳活アプリ・そよぎ  ―  15言語の言語パック
   LANG[コード] = { ui:{…}, colors:{…}, objects:{…} }
   ・数字は万国共通なので翻訳不要
   ・色名 colors[id] … ③ストループで使用
   ・物名 objects[id] … ④シルエットで使用
   ※機械＋知識ベースの翻訳です。公開前に母語話者レビュー推奨。
   ========================================================= */
const LANG = {

  ja: {
    ui:{ tagline:'きょうも、あたまの体操。', start:'今日のトレーニングを はじめる',
      usual:'いつもの', choose:'えらぶ', back:'ホームにもどる', wellDone:'よくできました！',
      correct:'せいかい', watch:'よく みてね', yourTurn:'どうぞ',
      tapColor:'文字の いろ を えらんでね', whatIsThis:'これは なに？',
      tapOrder:'ひかった じゅんに タップ', next:'つぎへ', settings:'せってい',
      language:'ことば', textSize:'もじの大きさ', sound:'おと',
      gCalc:'けいさん', gMemory:'じゅんばん', gStroop:'いろ', gShape:'かたち' },
    colors:{ red:'あか', blue:'あお', yellow:'きいろ', green:'みどり', black:'くろ', purple:'むらさき' },
    objects:{ apple:'りんご', banana:'バナナ', scissors:'はさみ', umbrella:'かさ', key:'かぎ',
      clock:'とけい', fish:'さかな', car:'くるま', house:'いえ', cup:'カップ' },
  },

  en: {
    ui:{ tagline:'A little brain workout today.', start:"Start today's training",
      usual:'Usual', choose:'Choose', back:'Home', wellDone:'Well done!',
      correct:'correct', watch:'Watch', yourTurn:'Your turn',
      tapColor:'Tap the COLOR of the word', whatIsThis:'What is this?',
      tapOrder:'Tap in the same order', next:'Next', settings:'Settings',
      language:'Language', textSize:'Text size', sound:'Sound',
      gCalc:'Numbers', gMemory:'Memory', gStroop:'Colors', gShape:'Shapes' },
    colors:{ red:'RED', blue:'BLUE', yellow:'YELLOW', green:'GREEN', black:'BLACK', purple:'PURPLE' },
    objects:{ apple:'Apple', banana:'Banana', scissors:'Scissors', umbrella:'Umbrella', key:'Key',
      clock:'Clock', fish:'Fish', car:'Car', house:'House', cup:'Cup' },
  },

  zh: {
    ui:{ tagline:'今天也来动动脑。', start:'开始今天的训练',
      usual:'照常', choose:'选择', back:'回首页', wellDone:'做得好！',
      correct:'答对', watch:'请看', yourTurn:'请你来',
      tapColor:'请点「字的颜色」', whatIsThis:'这是什么？',
      tapOrder:'按亮起的顺序点', next:'下一个', settings:'设置',
      language:'语言', textSize:'字号', sound:'声音',
      gCalc:'计算', gMemory:'顺序', gStroop:'颜色', gShape:'形状' },
    colors:{ red:'红', blue:'蓝', yellow:'黄', green:'绿', black:'黑', purple:'紫' },
    objects:{ apple:'苹果', banana:'香蕉', scissors:'剪刀', umbrella:'雨伞', key:'钥匙',
      clock:'时钟', fish:'鱼', car:'汽车', house:'房子', cup:'杯子' },
  },

  'zh-TW': {
    ui:{ tagline:'今天也來動動腦。', start:'開始今天的訓練',
      usual:'照常', choose:'選擇', back:'回首頁', wellDone:'做得好！',
      correct:'答對', watch:'請看', yourTurn:'換你',
      tapColor:'請點「字的顏色」', whatIsThis:'這是什麼？',
      tapOrder:'按亮起的順序點', next:'下一個', settings:'設定',
      language:'語言', textSize:'字級', sound:'聲音',
      gCalc:'計算', gMemory:'順序', gStroop:'顏色', gShape:'形狀' },
    colors:{ red:'紅', blue:'藍', yellow:'黃', green:'綠', black:'黑', purple:'紫' },
    objects:{ apple:'蘋果', banana:'香蕉', scissors:'剪刀', umbrella:'雨傘', key:'鑰匙',
      clock:'時鐘', fish:'魚', car:'汽車', house:'房子', cup:'杯子' },
  },

  ko: {
    ui:{ tagline:'오늘도 두뇌 체조.', start:'오늘의 훈련 시작',
      usual:'늘 하던 대로', choose:'고르기', back:'홈으로', wellDone:'잘하셨어요!',
      correct:'정답', watch:'잘 보세요', yourTurn:'해 보세요',
      tapColor:'글자의 「색」을 누르세요', whatIsThis:'이건 무엇일까요?',
      tapOrder:'불이 켜진 순서대로 누르세요', next:'다음', settings:'설정',
      language:'언어', textSize:'글자 크기', sound:'소리',
      gCalc:'계산', gMemory:'순서', gStroop:'색', gShape:'모양' },
    colors:{ red:'빨강', blue:'파랑', yellow:'노랑', green:'초록', black:'검정', purple:'보라' },
    objects:{ apple:'사과', banana:'바나나', scissors:'가위', umbrella:'우산', key:'열쇠',
      clock:'시계', fish:'물고기', car:'자동차', house:'집', cup:'컵' },
  },

  es: {
    ui:{ tagline:'Un poco de gimnasia mental hoy.', start:'Empezar el entrenamiento de hoy',
      usual:'Lo de siempre', choose:'Elegir', back:'Inicio', wellDone:'¡Muy bien!',
      correct:'correctas', watch:'Observa', yourTurn:'Tu turno',
      tapColor:'Toca el COLOR de la palabra', whatIsThis:'¿Qué es esto?',
      tapOrder:'Toca en el mismo orden', next:'Siguiente', settings:'Ajustes',
      language:'Idioma', textSize:'Tamaño del texto', sound:'Sonido',
      gCalc:'Números', gMemory:'Memoria', gStroop:'Colores', gShape:'Formas' },
    colors:{ red:'ROJO', blue:'AZUL', yellow:'AMARILLO', green:'VERDE', black:'NEGRO', purple:'MORADO' },
    objects:{ apple:'Manzana', banana:'Plátano', scissors:'Tijeras', umbrella:'Paraguas', key:'Llave',
      clock:'Reloj', fish:'Pez', car:'Coche', house:'Casa', cup:'Taza' },
  },

  pt: {
    ui:{ tagline:'Um pouco de ginástica mental hoje.', start:'Começar o treino de hoje',
      usual:'O de sempre', choose:'Escolher', back:'Início', wellDone:'Muito bem!',
      correct:'certas', watch:'Observe', yourTurn:'Sua vez',
      tapColor:'Toque na COR da palavra', whatIsThis:'O que é isto?',
      tapOrder:'Toque na mesma ordem', next:'Próximo', settings:'Ajustes',
      language:'Idioma', textSize:'Tamanho do texto', sound:'Som',
      gCalc:'Números', gMemory:'Memória', gStroop:'Cores', gShape:'Formas' },
    colors:{ red:'VERMELHO', blue:'AZUL', yellow:'AMARELO', green:'VERDE', black:'PRETO', purple:'ROXO' },
    objects:{ apple:'Maçã', banana:'Banana', scissors:'Tesoura', umbrella:'Guarda-chuva', key:'Chave',
      clock:'Relógio', fish:'Peixe', car:'Carro', house:'Casa', cup:'Xícara' },
  },

  fr: {
    ui:{ tagline:'Un peu de gymnastique du cerveau.', start:"Commencer l'entraînement du jour",
      usual:"Comme d'habitude", choose:'Choisir', back:'Accueil', wellDone:'Bravo !',
      correct:'correctes', watch:'Regardez', yourTurn:'À vous',
      tapColor:'Touchez la COULEUR du mot', whatIsThis:"Qu'est-ce que c'est ?",
      tapOrder:'Touchez dans le même ordre', next:'Suivant', settings:'Réglages',
      language:'Langue', textSize:'Taille du texte', sound:'Son',
      gCalc:'Calcul', gMemory:'Mémoire', gStroop:'Couleurs', gShape:'Formes' },
    colors:{ red:'ROUGE', blue:'BLEU', yellow:'JAUNE', green:'VERT', black:'NOIR', purple:'VIOLET' },
    objects:{ apple:'Pomme', banana:'Banane', scissors:'Ciseaux', umbrella:'Parapluie', key:'Clé',
      clock:'Horloge', fish:'Poisson', car:'Voiture', house:'Maison', cup:'Tasse' },
  },

  de: {
    ui:{ tagline:'Heute ein bisschen Gehirnjogging.', start:'Heutiges Training starten',
      usual:'Wie immer', choose:'Auswählen', back:'Start', wellDone:'Gut gemacht!',
      correct:'richtig', watch:'Schau zu', yourTurn:'Sie sind dran',
      tapColor:'Tippe die FARBE des Wortes', whatIsThis:'Was ist das?',
      tapOrder:'In derselben Reihenfolge tippen', next:'Weiter', settings:'Einstellungen',
      language:'Sprache', textSize:'Textgröße', sound:'Ton',
      gCalc:'Rechnen', gMemory:'Gedächtnis', gStroop:'Farben', gShape:'Formen' },
    colors:{ red:'ROT', blue:'BLAU', yellow:'GELB', green:'GRÜN', black:'SCHWARZ', purple:'LILA' },
    objects:{ apple:'Apfel', banana:'Banane', scissors:'Schere', umbrella:'Regenschirm', key:'Schlüssel',
      clock:'Uhr', fish:'Fisch', car:'Auto', house:'Haus', cup:'Tasse' },
  },

  it: {
    ui:{ tagline:'Un po\' di ginnastica mentale oggi.', start:"Inizia l'allenamento di oggi",
      usual:'Come al solito', choose:'Scegli', back:'Home', wellDone:'Bravo!',
      correct:'corrette', watch:'Guarda', yourTurn:'Tocca a te',
      tapColor:'Tocca il COLORE della parola', whatIsThis:"Che cos'è?",
      tapOrder:'Tocca nello stesso ordine', next:'Avanti', settings:'Impostazioni',
      language:'Lingua', textSize:'Dimensione testo', sound:'Suono',
      gCalc:'Calcolo', gMemory:'Memoria', gStroop:'Colori', gShape:'Forme' },
    colors:{ red:'ROSSO', blue:'BLU', yellow:'GIALLO', green:'VERDE', black:'NERO', purple:'VIOLA' },
    objects:{ apple:'Mela', banana:'Banana', scissors:'Forbici', umbrella:'Ombrello', key:'Chiave',
      clock:'Orologio', fish:'Pesce', car:'Auto', house:'Casa', cup:'Tazza' },
  },

  nl: {
    ui:{ tagline:'Vandaag even hersengymnastiek.', start:'Begin de training van vandaag',
      usual:'Zoals altijd', choose:'Kiezen', back:'Home', wellDone:'Goed gedaan!',
      correct:'goed', watch:'Kijk', yourTurn:'Jouw beurt',
      tapColor:'Tik op de KLEUR van het woord', whatIsThis:'Wat is dit?',
      tapOrder:'Tik in dezelfde volgorde', next:'Volgende', settings:'Instellingen',
      language:'Taal', textSize:'Tekstgrootte', sound:'Geluid',
      gCalc:'Rekenen', gMemory:'Geheugen', gStroop:'Kleuren', gShape:'Vormen' },
    colors:{ red:'ROOD', blue:'BLAUW', yellow:'GEEL', green:'GROEN', black:'ZWART', purple:'PAARS' },
    objects:{ apple:'Appel', banana:'Banaan', scissors:'Schaar', umbrella:'Paraplu', key:'Sleutel',
      clock:'Klok', fish:'Vis', car:'Auto', house:'Huis', cup:'Kopje' },
  },

  pl: {
    ui:{ tagline:'Dziś trochę gimnastyki dla mózgu.', start:'Rozpocznij dzisiejszy trening',
      usual:'Jak zwykle', choose:'Wybierz', back:'Start', wellDone:'Dobra robota!',
      correct:'poprawnych', watch:'Patrz', yourTurn:'Twoja kolej',
      tapColor:'Dotknij KOLORU słowa', whatIsThis:'Co to jest?',
      tapOrder:'Dotykaj w tej samej kolejności', next:'Dalej', settings:'Ustawienia',
      language:'Język', textSize:'Rozmiar tekstu', sound:'Dźwięk',
      gCalc:'Liczby', gMemory:'Pamięć', gStroop:'Kolory', gShape:'Kształty' },
    colors:{ red:'CZERWONY', blue:'NIEBIESKI', yellow:'ŻÓŁTY', green:'ZIELONY', black:'CZARNY', purple:'FIOLETOWY' },
    objects:{ apple:'Jabłko', banana:'Banan', scissors:'Nożyczki', umbrella:'Parasol', key:'Klucz',
      clock:'Zegar', fish:'Ryba', car:'Samochód', house:'Dom', cup:'Kubek' },
  },

  ru: {
    ui:{ tagline:'Сегодня — лёгкая гимнастика для ума.', start:'Начать сегодняшнюю тренировку',
      usual:'Как обычно', choose:'Выбрать', back:'Домой', wellDone:'Молодец!',
      correct:'верно', watch:'Смотрите', yourTurn:'Ваш ход',
      tapColor:'Нажмите ЦВЕТ слова', whatIsThis:'Что это?',
      tapOrder:'Нажимайте в том же порядке', next:'Далее', settings:'Настройки',
      language:'Язык', textSize:'Размер текста', sound:'Звук',
      gCalc:'Счёт', gMemory:'Память', gStroop:'Цвета', gShape:'Формы' },
    colors:{ red:'КРАСНЫЙ', blue:'СИНИЙ', yellow:'ЖЁЛТЫЙ', green:'ЗЕЛЁНЫЙ', black:'ЧЁРНЫЙ', purple:'ФИОЛЕТОВЫЙ' },
    objects:{ apple:'Яблоко', banana:'Банан', scissors:'Ножницы', umbrella:'Зонт', key:'Ключ',
      clock:'Часы', fish:'Рыба', car:'Машина', house:'Дом', cup:'Чашка' },
  },

  tr: {
    ui:{ tagline:'Bugün biraz beyin jimnastiği.', start:'Bugünün antrenmanını başlat',
      usual:'Her zamanki', choose:'Seç', back:'Ana sayfa', wellDone:'Aferin!',
      correct:'doğru', watch:'İzle', yourTurn:'Sıra sende',
      tapColor:'Kelimenin RENGİNE dokun', whatIsThis:'Bu nedir?',
      tapOrder:'Aynı sırayla dokun', next:'İleri', settings:'Ayarlar',
      language:'Dil', textSize:'Yazı boyutu', sound:'Ses',
      gCalc:'Sayılar', gMemory:'Hafıza', gStroop:'Renkler', gShape:'Şekiller' },
    colors:{ red:'KIRMIZI', blue:'MAVİ', yellow:'SARI', green:'YEŞİL', black:'SİYAH', purple:'MOR' },
    objects:{ apple:'Elma', banana:'Muz', scissors:'Makas', umbrella:'Şemsiye', key:'Anahtar',
      clock:'Saat', fish:'Balık', car:'Araba', house:'Ev', cup:'Fincan' },
  },

  hi: {
    ui:{ tagline:'आज थोड़ा दिमागी व्यायाम।', start:'आज का अभ्यास शुरू करें',
      usual:'हमेशा की तरह', choose:'चुनें', back:'होम', wellDone:'शाबाश!',
      correct:'सही', watch:'देखिए', yourTurn:'आपकी बारी',
      tapColor:'शब्द का रंग दबाएँ', whatIsThis:'यह क्या है?',
      tapOrder:'उसी क्रम में दबाएँ', next:'आगे', settings:'सेटिंग्स',
      language:'भाषा', textSize:'अक्षर का आकार', sound:'ध्वनि',
      gCalc:'गिनती', gMemory:'याददाश्त', gStroop:'रंग', gShape:'आकार' },
    colors:{ red:'लाल', blue:'नीला', yellow:'पीला', green:'हरा', black:'काला', purple:'बैंगनी' },
    objects:{ apple:'सेब', banana:'केला', scissors:'कैंची', umbrella:'छाता', key:'चाबी',
      clock:'घड़ी', fish:'मछली', car:'गाड़ी', house:'घर', cup:'कप' },
  },

};

/* ---- クレジット（タイトル画面のHPリンク文言・15言語） ---- */
const CREDITS = {
  ja:'アプリ開発：介護と支援の相談どころ　そよぎ',
  en:'Developed by Soyogi — Care & Support Consultation',
  zh:'开发：介护与支援咨询处 Soyogi',
  'zh-TW':'開發：介護與支援諮詢處 Soyogi',
  ko:'개발: 돌봄·지원 상담소 Soyogi',
  es:'Desarrollado por Soyogi — Consultas de cuidado y apoyo',
  pt:'Desenvolvido pela Soyogi — Consultoria de cuidado e apoio',
  fr:'Développé par Soyogi — Consultations de soins et de soutien',
  de:'Entwickelt von Soyogi — Pflege- und Unterstützungsberatung',
  it:'Sviluppato da Soyogi — Consulenza per cura e supporto',
  nl:'Ontwikkeld door Soyogi — Zorg- en ondersteuningsadvies',
  pl:'Opracowane przez Soyogi — poradnia opieki i wsparcia',
  ru:'Разработано Soyogi — консультации по уходу и поддержке',
  tr:'Geliştiren: Soyogi — Bakım ve destek danışmanlığı',
  hi:'विकसित: देखभाल और सहायता परामर्श केंद्र Soyogi',
};
Object.keys(CREDITS).forEach(k=>{ if(LANG[k]) LANG[k].ui.credit = CREDITS[k]; });

/* ---- 「むずかしい」モードのラベル（15言語） ---- */
const HARD = {
  ja:'むずかしい', en:'Hard', zh:'困难', 'zh-TW':'困難', ko:'어려움',
  es:'Difícil', pt:'Difícil', fr:'Difficile', de:'Schwer', it:'Difficile',
  nl:'Moeilijk', pl:'Trudne', ru:'Сложно', tr:'Zor', hi:'कठिन',
};
Object.keys(HARD).forEach(k=>{ if(LANG[k]) LANG[k].ui.hard = HARD[k]; });

/* ---- 「おんがく（BGM）」ラベル（15言語） ---- */
const MUSIC = {
  ja:'おんがく', en:'Music', zh:'音乐', 'zh-TW':'音樂', ko:'음악',
  es:'Música', pt:'Música', fr:'Musique', de:'Musik', it:'Musica',
  nl:'Muziek', pl:'Muzyka', ru:'Музыка', tr:'Müzik', hi:'संगीत',
};
Object.keys(MUSIC).forEach(k=>{ if(LANG[k]) LANG[k].ui.music = MUSIC[k]; });

/* ---- 記録・カレンダー関連ラベル（15言語） ---- */
const RECORDS = {
  ja:'記録を見る', en:'See records', zh:'查看记录', 'zh-TW':'查看紀錄', ko:'기록 보기',
  es:'Ver registros', pt:'Ver registros', fr:"Voir l'historique", de:'Verlauf ansehen', it:'Vedi archivio',
  nl:'Records bekijken', pl:'Zobacz zapisy', ru:'Посмотреть записи', tr:'Kayıtları gör', hi:'रिकॉर्ड देखें',
};
const PLAYDAYS = {
  ja:'プレイ日数', en:'Days played', zh:'游玩天数', 'zh-TW':'遊玩天數', ko:'플레이 일수',
  es:'Días jugados', pt:'Dias jogados', fr:'Jours joués', de:'Gespielte Tage', it:'Giorni giocati',
  nl:'Gespeelde dagen', pl:'Dni gry', ru:'Дней игры', tr:'Oynanan gün', hi:'खेले दिन',
};
const NOREC = {
  ja:'この日は きろくが ありません', en:'No records for this day', zh:'当天暂无记录', 'zh-TW':'當天尚無紀錄', ko:'이 날은 기록이 없습니다',
  es:'Sin registros este día', pt:'Sem registros neste dia', fr:'Aucun historique ce jour', de:'Keine Einträge an diesem Tag', it:'Nessun dato per questo giorno',
  nl:'Geen records op deze dag', pl:'Brak zapisów tego dnia', ru:'Нет записей за этот день', tr:'Bu gün için kayıt yok', hi:'इस दिन कोई रिकॉर्ड नहीं',
};
Object.keys(RECORDS).forEach(k=>{ if(LANG[k]){ LANG[k].ui.records=RECORDS[k]; LANG[k].ui.playDays=PLAYDAYS[k]; LANG[k].ui.noRecord=NOREC[k]; } });

/* ---- プレイ回数ラベルと単位（日／回）。単位はCJK/韓のみ表示、他は空（見出しで足りる） ---- */
const PLAYCOUNT = {
  ja:'プレイ回数', en:'Times played', zh:'游玩次数', 'zh-TW':'遊玩次數', ko:'플레이 횟수',
  es:'Veces jugadas', pt:'Vezes jogadas', fr:'Parties jouées', de:'Gespielte Runden', it:'Volte giocate',
  nl:'Keer gespeeld', pl:'Rozegrane gry', ru:'Всего игр', tr:'Oynama sayısı', hi:'खेले बार',
};
const DAYS_U  = { ja:'日', zh:'天', 'zh-TW':'天', ko:'일' };   // それ以外は空
const TIMES_U = { ja:'回', zh:'次', 'zh-TW':'次', ko:'회' };
Object.keys(LANG).forEach(k=>{
  if(PLAYCOUNT[k]) LANG[k].ui.playCount = PLAYCOUNT[k];
  LANG[k].ui.daysUnit  = DAYS_U[k]  || '';
  LANG[k].ui.timesUnit = TIMES_U[k] || '';
});
