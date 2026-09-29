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
      gCalc:'けいさん', gMemory:'じゅんばん', gStroop:'いろ', gShape:'かたち', gNumber:'かずタッチ',
      tapNumber:'1から じゅんばんに タップしてね',
      tapWordColor:'ことばが あらわす「いろ」を えらんでね',
      moneyQ:'{price}えんの かいもの。{pay}えんで はらうと、おつりは？' },
    colors:{ red:'あか', blue:'あお', yellow:'きいろ', green:'みどり', black:'くろ', purple:'むらさき' },
    objects:{ apple:'りんご', banana:'バナナ', scissors:'はさみ', umbrella:'かさ', key:'かぎ',
      clock:'とけい', fish:'さかな', car:'くるま', house:'いえ', cup:'カップ',
      cat:'ねこ', dog:'いぬ', elephant:'ぞう', rabbit:'うさぎ', turtle:'かめ', butterfly:'ちょう', crab:'かに', octopus:'たこ', rooster:'にわとり', airplane:'ひこうき', bicycle:'じてんしゃ', train:'きかんしゃ', yacht:'ヨット', phone:'でんわ', glasses:'めがね', hat:'ぼうし', shoe:'くつ', glove:'てぶくろ', hammer:'かなづち', sunflower:'ひまわり' },
  },

  en: {
    ui:{ tagline:'A little brain workout today.', start:"Start today's training",
      usual:'Usual', choose:'Choose', back:'Home', wellDone:'Well done!',
      correct:'correct', watch:'Watch', yourTurn:'Your turn',
      tapColor:'Tap the COLOR of the word', whatIsThis:'What is this?',
      tapOrder:'Tap in the same order', next:'Next', settings:'Settings',
      language:'Language', textSize:'Text size', sound:'Sound',
      gCalc:'Numbers', gMemory:'Memory', gStroop:'Colors', gShape:'Shapes', gNumber:'Tap 1-2-3',
      tapNumber:'Tap the numbers in order, from 1',
      tapWordColor:'Tap the color the word MEANS',
      moneyQ:'It costs {price} coins. You pay {pay}. How much change?' },
    colors:{ red:'RED', blue:'BLUE', yellow:'YELLOW', green:'GREEN', black:'BLACK', purple:'PURPLE' },
    objects:{ apple:'Apple', banana:'Banana', scissors:'Scissors', umbrella:'Umbrella', key:'Key',
      clock:'Clock', fish:'Fish', car:'Car', house:'House', cup:'Cup',
      cat:'Cat', dog:'Dog', elephant:'Elephant', rabbit:'Rabbit', turtle:'Turtle', butterfly:'Butterfly', crab:'Crab', octopus:'Octopus', rooster:'Rooster', airplane:'Airplane', bicycle:'Bicycle', train:'Train', yacht:'Sailboat', phone:'Telephone', glasses:'Glasses', hat:'Hat', shoe:'Shoe', glove:'Gloves', hammer:'Hammer', sunflower:'Sunflower' },
  },

  zh: {
    ui:{ tagline:'今天也来动动脑。', start:'开始今天的训练',
      usual:'照常', choose:'选择', back:'回首页', wellDone:'做得好！',
      correct:'答对', watch:'请看', yourTurn:'请你来',
      tapColor:'请点「字的颜色」', whatIsThis:'这是什么？',
      tapOrder:'按亮起的顺序点', next:'下一个', settings:'设置',
      language:'语言', textSize:'字号', sound:'声音',
      gCalc:'计算', gMemory:'顺序', gStroop:'颜色', gShape:'形状', gNumber:'数字点点',
      tapNumber:'请从1开始按顺序点',
      tapWordColor:'请点「字的意思」的颜色',
      moneyQ:'买东西花{price}枚金币，付了{pay}枚。找零多少？' },
    colors:{ red:'红', blue:'蓝', yellow:'黄', green:'绿', black:'黑', purple:'紫' },
    objects:{ apple:'苹果', banana:'香蕉', scissors:'剪刀', umbrella:'雨伞', key:'钥匙',
      clock:'时钟', fish:'鱼', car:'汽车', house:'房子', cup:'杯子',
      cat:'猫', dog:'狗', elephant:'大象', rabbit:'兔子', turtle:'乌龟', butterfly:'蝴蝶', crab:'螃蟹', octopus:'章鱼', rooster:'公鸡', airplane:'飞机', bicycle:'自行车', train:'火车', yacht:'帆船', phone:'电话', glasses:'眼镜', hat:'帽子', shoe:'鞋', glove:'手套', hammer:'锤子', sunflower:'向日葵' },
  },

  'zh-TW': {
    ui:{ tagline:'今天也來動動腦。', start:'開始今天的訓練',
      usual:'照常', choose:'選擇', back:'回首頁', wellDone:'做得好！',
      correct:'答對', watch:'請看', yourTurn:'換你',
      tapColor:'請點「字的顏色」', whatIsThis:'這是什麼？',
      tapOrder:'按亮起的順序點', next:'下一個', settings:'設定',
      language:'語言', textSize:'字級', sound:'聲音',
      gCalc:'計算', gMemory:'順序', gStroop:'顏色', gShape:'形狀', gNumber:'數字點點',
      tapNumber:'請從1開始按順序點',
      tapWordColor:'請點「字的意思」的顏色',
      moneyQ:'買東西花{price}枚金幣，付了{pay}枚。找零多少？' },
    colors:{ red:'紅', blue:'藍', yellow:'黃', green:'綠', black:'黑', purple:'紫' },
    objects:{ apple:'蘋果', banana:'香蕉', scissors:'剪刀', umbrella:'雨傘', key:'鑰匙',
      clock:'時鐘', fish:'魚', car:'汽車', house:'房子', cup:'杯子',
      cat:'貓', dog:'狗', elephant:'大象', rabbit:'兔子', turtle:'烏龜', butterfly:'蝴蝶', crab:'螃蟹', octopus:'章魚', rooster:'公雞', airplane:'飛機', bicycle:'腳踏車', train:'火車', yacht:'帆船', phone:'電話', glasses:'眼鏡', hat:'帽子', shoe:'鞋', glove:'手套', hammer:'鎚子', sunflower:'向日葵' },
  },

  ko: {
    ui:{ tagline:'오늘도 두뇌 체조.', start:'오늘의 훈련 시작',
      usual:'늘 하던 대로', choose:'고르기', back:'홈으로', wellDone:'잘하셨어요!',
      correct:'정답', watch:'잘 보세요', yourTurn:'해 보세요',
      tapColor:'글자의 「색」을 누르세요', whatIsThis:'이건 무엇일까요?',
      tapOrder:'불이 켜진 순서대로 누르세요', next:'다음', settings:'설정',
      language:'언어', textSize:'글자 크기', sound:'소리',
      gCalc:'계산', gMemory:'순서', gStroop:'색', gShape:'모양', gNumber:'숫자 터치',
      tapNumber:'1부터 순서대로 눌러 주세요',
      tapWordColor:'글자가 뜻하는 색을 눌러 주세요',
      moneyQ:'{price}코인짜리 물건을 {pay}코인 내고 사요. 거스름돈은?' },
    colors:{ red:'빨강', blue:'파랑', yellow:'노랑', green:'초록', black:'검정', purple:'보라' },
    objects:{ apple:'사과', banana:'바나나', scissors:'가위', umbrella:'우산', key:'열쇠',
      clock:'시계', fish:'물고기', car:'자동차', house:'집', cup:'컵',
      cat:'고양이', dog:'개', elephant:'코끼리', rabbit:'토끼', turtle:'거북이', butterfly:'나비', crab:'게', octopus:'문어', rooster:'수탉', airplane:'비행기', bicycle:'자전거', train:'기차', yacht:'돛단배', phone:'전화기', glasses:'안경', hat:'모자', shoe:'신발', glove:'장갑', hammer:'망치', sunflower:'해바라기' },
  },

  es: {
    ui:{ tagline:'Un poco de gimnasia mental hoy.', start:'Empezar el entrenamiento de hoy',
      usual:'Lo de siempre', choose:'Elegir', back:'Inicio', wellDone:'¡Muy bien!',
      correct:'correctas', watch:'Observa', yourTurn:'Tu turno',
      tapColor:'Toca el COLOR de la palabra', whatIsThis:'¿Qué es esto?',
      tapOrder:'Toca en el mismo orden', next:'Siguiente', settings:'Ajustes',
      language:'Idioma', textSize:'Tamaño del texto', sound:'Sonido',
      gCalc:'Números', gMemory:'Memoria', gStroop:'Colores', gShape:'Formas', gNumber:'Toca 1-2-3',
      tapNumber:'Toca los números en orden desde el 1',
      tapWordColor:'Toca el color que SIGNIFICA la palabra',
      moneyQ:'Cuesta {price} monedas y pagas {pay}. ¿Cuánto es el cambio?' },
    colors:{ red:'ROJO', blue:'AZUL', yellow:'AMARILLO', green:'VERDE', black:'NEGRO', purple:'MORADO' },
    objects:{ apple:'Manzana', banana:'Plátano', scissors:'Tijeras', umbrella:'Paraguas', key:'Llave',
      clock:'Reloj', fish:'Pez', car:'Coche', house:'Casa', cup:'Taza',
      cat:'Gato', dog:'Perro', elephant:'Elefante', rabbit:'Conejo', turtle:'Tortuga', butterfly:'Mariposa', crab:'Cangrejo', octopus:'Pulpo', rooster:'Gallo', airplane:'Avión', bicycle:'Bicicleta', train:'Tren', yacht:'Velero', phone:'Teléfono', glasses:'Gafas', hat:'Sombrero', shoe:'Zapato', glove:'Guantes', hammer:'Martillo', sunflower:'Girasol' },
  },

  pt: {
    ui:{ tagline:'Um pouco de ginástica mental hoje.', start:'Começar o treino de hoje',
      usual:'O de sempre', choose:'Escolher', back:'Início', wellDone:'Muito bem!',
      correct:'certas', watch:'Observe', yourTurn:'Sua vez',
      tapColor:'Toque na COR da palavra', whatIsThis:'O que é isto?',
      tapOrder:'Toque na mesma ordem', next:'Próximo', settings:'Ajustes',
      language:'Idioma', textSize:'Tamanho do texto', sound:'Som',
      gCalc:'Números', gMemory:'Memória', gStroop:'Cores', gShape:'Formas', gNumber:'Toque 1-2-3',
      tapNumber:'Toque nos números em ordem, do 1 em diante',
      tapWordColor:'Toque na cor que a palavra SIGNIFICA',
      moneyQ:'Custa {price} moedas e você paga {pay}. Quanto é o troco?' },
    colors:{ red:'VERMELHO', blue:'AZUL', yellow:'AMARELO', green:'VERDE', black:'PRETO', purple:'ROXO' },
    objects:{ apple:'Maçã', banana:'Banana', scissors:'Tesoura', umbrella:'Guarda-chuva', key:'Chave',
      clock:'Relógio', fish:'Peixe', car:'Carro', house:'Casa', cup:'Xícara',
      cat:'Gato', dog:'Cachorro', elephant:'Elefante', rabbit:'Coelho', turtle:'Tartaruga', butterfly:'Borboleta', crab:'Caranguejo', octopus:'Polvo', rooster:'Galo', airplane:'Avião', bicycle:'Bicicleta', train:'Trem', yacht:'Veleiro', phone:'Telefone', glasses:'Óculos', hat:'Chapéu', shoe:'Sapato', glove:'Luvas', hammer:'Martelo', sunflower:'Girassol' },
  },

  fr: {
    ui:{ tagline:'Un peu de gymnastique du cerveau.', start:"Commencer l'entraînement du jour",
      usual:"Comme d'habitude", choose:'Choisir', back:'Accueil', wellDone:'Bravo !',
      correct:'correctes', watch:'Regardez', yourTurn:'À vous',
      tapColor:'Touchez la COULEUR du mot', whatIsThis:"Qu'est-ce que c'est ?",
      tapOrder:'Touchez dans le même ordre', next:'Suivant', settings:'Réglages',
      language:'Langue', textSize:'Taille du texte', sound:'Son',
      gCalc:'Calcul', gMemory:'Mémoire', gStroop:'Couleurs', gShape:'Formes', gNumber:'Touche 1-2-3',
      tapNumber:'Touche les nombres dans l\'ordre, à partir de 1',
      tapWordColor:'Touche la couleur que le mot SIGNIFIE',
      moneyQ:'Ça coûte {price} pièces, tu paies {pay}. Combien de monnaie ?' },
    colors:{ red:'ROUGE', blue:'BLEU', yellow:'JAUNE', green:'VERT', black:'NOIR', purple:'VIOLET' },
    objects:{ apple:'Pomme', banana:'Banane', scissors:'Ciseaux', umbrella:'Parapluie', key:'Clé',
      clock:'Horloge', fish:'Poisson', car:'Voiture', house:'Maison', cup:'Tasse',
      cat:'Chat', dog:'Chien', elephant:'Éléphant', rabbit:'Lapin', turtle:'Tortue', butterfly:'Papillon', crab:'Crabe', octopus:'Poulpe', rooster:'Coq', airplane:'Avion', bicycle:'Vélo', train:'Train', yacht:'Voilier', phone:'Téléphone', glasses:'Lunettes', hat:'Chapeau', shoe:'Chaussure', glove:'Gants', hammer:'Marteau', sunflower:'Tournesol' },
  },

  de: {
    ui:{ tagline:'Heute ein bisschen Gehirnjogging.', start:'Heutiges Training starten',
      usual:'Wie immer', choose:'Auswählen', back:'Start', wellDone:'Gut gemacht!',
      correct:'richtig', watch:'Schau zu', yourTurn:'Sie sind dran',
      tapColor:'Tippe die FARBE des Wortes', whatIsThis:'Was ist das?',
      tapOrder:'In derselben Reihenfolge tippen', next:'Weiter', settings:'Einstellungen',
      language:'Sprache', textSize:'Textgröße', sound:'Ton',
      gCalc:'Rechnen', gMemory:'Gedächtnis', gStroop:'Farben', gShape:'Formen', gNumber:'Tipp 1-2-3',
      tapNumber:'Tippe die Zahlen der Reihe nach, ab 1',
      tapWordColor:'Tippe die Farbe, die das Wort BEDEUTET',
      moneyQ:'Es kostet {price} Münzen, du zahlst {pay}. Wie viel Rückgeld?' },
    colors:{ red:'ROT', blue:'BLAU', yellow:'GELB', green:'GRÜN', black:'SCHWARZ', purple:'LILA' },
    objects:{ apple:'Apfel', banana:'Banane', scissors:'Schere', umbrella:'Regenschirm', key:'Schlüssel',
      clock:'Uhr', fish:'Fisch', car:'Auto', house:'Haus', cup:'Tasse',
      cat:'Katze', dog:'Hund', elephant:'Elefant', rabbit:'Hase', turtle:'Schildkröte', butterfly:'Schmetterling', crab:'Krabbe', octopus:'Krake', rooster:'Hahn', airplane:'Flugzeug', bicycle:'Fahrrad', train:'Zug', yacht:'Segelboot', phone:'Telefon', glasses:'Brille', hat:'Hut', shoe:'Schuh', glove:'Handschuhe', hammer:'Hammer', sunflower:'Sonnenblume' },
  },

  it: {
    ui:{ tagline:'Un po\' di ginnastica mentale oggi.', start:"Inizia l'allenamento di oggi",
      usual:'Come al solito', choose:'Scegli', back:'Home', wellDone:'Bravo!',
      correct:'corrette', watch:'Guarda', yourTurn:'Tocca a te',
      tapColor:'Tocca il COLORE della parola', whatIsThis:"Che cos'è?",
      tapOrder:'Tocca nello stesso ordine', next:'Avanti', settings:'Impostazioni',
      language:'Lingua', textSize:'Dimensione testo', sound:'Suono',
      gCalc:'Calcolo', gMemory:'Memoria', gStroop:'Colori', gShape:'Forme', gNumber:'Tocca 1-2-3',
      tapNumber:'Tocca i numeri in ordine, partendo da 1',
      tapWordColor:'Tocca il colore che la parola SIGNIFICA',
      moneyQ:'Costa {price} monete e paghi {pay}. Quanto è il resto?' },
    colors:{ red:'ROSSO', blue:'BLU', yellow:'GIALLO', green:'VERDE', black:'NERO', purple:'VIOLA' },
    objects:{ apple:'Mela', banana:'Banana', scissors:'Forbici', umbrella:'Ombrello', key:'Chiave',
      clock:'Orologio', fish:'Pesce', car:'Auto', house:'Casa', cup:'Tazza',
      cat:'Gatto', dog:'Cane', elephant:'Elefante', rabbit:'Coniglio', turtle:'Tartaruga', butterfly:'Farfalla', crab:'Granchio', octopus:'Polpo', rooster:'Gallo', airplane:'Aereo', bicycle:'Bicicletta', train:'Treno', yacht:'Barca a vela', phone:'Telefono', glasses:'Occhiali', hat:'Cappello', shoe:'Scarpa', glove:'Guanti', hammer:'Martello', sunflower:'Girasole' },
  },

  nl: {
    ui:{ tagline:'Vandaag even hersengymnastiek.', start:'Begin de training van vandaag',
      usual:'Zoals altijd', choose:'Kiezen', back:'Home', wellDone:'Goed gedaan!',
      correct:'goed', watch:'Kijk', yourTurn:'Jouw beurt',
      tapColor:'Tik op de KLEUR van het woord', whatIsThis:'Wat is dit?',
      tapOrder:'Tik in dezelfde volgorde', next:'Volgende', settings:'Instellingen',
      language:'Taal', textSize:'Tekstgrootte', sound:'Geluid',
      gCalc:'Rekenen', gMemory:'Geheugen', gStroop:'Kleuren', gShape:'Vormen', gNumber:'Tik 1-2-3',
      tapNumber:'Tik de cijfers op volgorde aan, vanaf 1',
      tapWordColor:'Tik op de kleur die het woord BETEKENT',
      moneyQ:'Het kost {price} munten, je betaalt {pay}. Hoeveel wisselgeld?' },
    colors:{ red:'ROOD', blue:'BLAUW', yellow:'GEEL', green:'GROEN', black:'ZWART', purple:'PAARS' },
    objects:{ apple:'Appel', banana:'Banaan', scissors:'Schaar', umbrella:'Paraplu', key:'Sleutel',
      clock:'Klok', fish:'Vis', car:'Auto', house:'Huis', cup:'Kopje',
      cat:'Kat', dog:'Hond', elephant:'Olifant', rabbit:'Konijn', turtle:'Schildpad', butterfly:'Vlinder', crab:'Krab', octopus:'Octopus', rooster:'Haan', airplane:'Vliegtuig', bicycle:'Fiets', train:'Trein', yacht:'Zeilboot', phone:'Telefoon', glasses:'Bril', hat:'Hoed', shoe:'Schoen', glove:'Handschoenen', hammer:'Hamer', sunflower:'Zonnebloem' },
  },

  pl: {
    ui:{ tagline:'Dziś trochę gimnastyki dla mózgu.', start:'Rozpocznij dzisiejszy trening',
      usual:'Jak zwykle', choose:'Wybierz', back:'Start', wellDone:'Dobra robota!',
      correct:'poprawnych', watch:'Patrz', yourTurn:'Twoja kolej',
      tapColor:'Dotknij KOLORU słowa', whatIsThis:'Co to jest?',
      tapOrder:'Dotykaj w tej samej kolejności', next:'Dalej', settings:'Ustawienia',
      language:'Język', textSize:'Rozmiar tekstu', sound:'Dźwięk',
      gCalc:'Liczby', gMemory:'Pamięć', gStroop:'Kolory', gShape:'Kształty', gNumber:'Dotknij 1-2-3',
      tapNumber:'Dotykaj liczb po kolei, zaczynając od 1',
      tapWordColor:'Dotknij koloru, który OZNACZA słowo',
      moneyQ:'Kosztuje {price} monet, płacisz {pay}. Ile reszty?' },
    colors:{ red:'CZERWONY', blue:'NIEBIESKI', yellow:'ŻÓŁTY', green:'ZIELONY', black:'CZARNY', purple:'FIOLETOWY' },
    objects:{ apple:'Jabłko', banana:'Banan', scissors:'Nożyczki', umbrella:'Parasol', key:'Klucz',
      clock:'Zegar', fish:'Ryba', car:'Samochód', house:'Dom', cup:'Kubek',
      cat:'Kot', dog:'Pies', elephant:'Słoń', rabbit:'Królik', turtle:'Żółw', butterfly:'Motyl', crab:'Krab', octopus:'Ośmiornica', rooster:'Kogut', airplane:'Samolot', bicycle:'Rower', train:'Pociąg', yacht:'Żaglówka', phone:'Telefon', glasses:'Okulary', hat:'Kapelusz', shoe:'But', glove:'Rękawiczki', hammer:'Młotek', sunflower:'Słonecznik' },
  },

  ru: {
    ui:{ tagline:'Сегодня — лёгкая гимнастика для ума.', start:'Начать сегодняшнюю тренировку',
      usual:'Как обычно', choose:'Выбрать', back:'Домой', wellDone:'Молодец!',
      correct:'верно', watch:'Смотрите', yourTurn:'Ваш ход',
      tapColor:'Нажмите ЦВЕТ слова', whatIsThis:'Что это?',
      tapOrder:'Нажимайте в том же порядке', next:'Далее', settings:'Настройки',
      language:'Язык', textSize:'Размер текста', sound:'Звук',
      gCalc:'Счёт', gMemory:'Память', gStroop:'Цвета', gShape:'Формы', gNumber:'Нажми 1-2-3',
      tapNumber:'Нажимай числа по порядку, начиная с 1',
      tapWordColor:'Нажми цвет, который ОЗНАЧАЕТ слово',
      moneyQ:'Товар стоит {price} монет, ты платишь {pay}. Сколько сдачи?' },
    colors:{ red:'КРАСНЫЙ', blue:'СИНИЙ', yellow:'ЖЁЛТЫЙ', green:'ЗЕЛЁНЫЙ', black:'ЧЁРНЫЙ', purple:'ФИОЛЕТОВЫЙ' },
    objects:{ apple:'Яблоко', banana:'Банан', scissors:'Ножницы', umbrella:'Зонт', key:'Ключ',
      clock:'Часы', fish:'Рыба', car:'Машина', house:'Дом', cup:'Чашка',
      cat:'Кошка', dog:'Собака', elephant:'Слон', rabbit:'Кролик', turtle:'Черепаха', butterfly:'Бабочка', crab:'Краб', octopus:'Осьминог', rooster:'Петух', airplane:'Самолёт', bicycle:'Велосипед', train:'Поезд', yacht:'Парусник', phone:'Телефон', glasses:'Очки', hat:'Шляпа', shoe:'Ботинок', glove:'Перчатки', hammer:'Молоток', sunflower:'Подсолнух' },
  },

  tr: {
    ui:{ tagline:'Bugün biraz beyin jimnastiği.', start:'Bugünün antrenmanını başlat',
      usual:'Her zamanki', choose:'Seç', back:'Ana sayfa', wellDone:'Aferin!',
      correct:'doğru', watch:'İzle', yourTurn:'Sıra sende',
      tapColor:'Kelimenin RENGİNE dokun', whatIsThis:'Bu nedir?',
      tapOrder:'Aynı sırayla dokun', next:'İleri', settings:'Ayarlar',
      language:'Dil', textSize:'Yazı boyutu', sound:'Ses',
      gCalc:'Sayılar', gMemory:'Hafıza', gStroop:'Renkler', gShape:'Şekiller', gNumber:'Dokun 1-2-3',
      tapNumber:'1\'den başlayarak sayılara sırayla dokun',
      tapWordColor:'Kelimenin ANLAMI olan renge dokun',
      moneyQ:'{price} coin tutuyor, {pay} coin ödüyorsun. Para üstü kaç?' },
    colors:{ red:'KIRMIZI', blue:'MAVİ', yellow:'SARI', green:'YEŞİL', black:'SİYAH', purple:'MOR' },
    objects:{ apple:'Elma', banana:'Muz', scissors:'Makas', umbrella:'Şemsiye', key:'Anahtar',
      clock:'Saat', fish:'Balık', car:'Araba', house:'Ev', cup:'Fincan',
      cat:'Kedi', dog:'Köpek', elephant:'Fil', rabbit:'Tavşan', turtle:'Kaplumbağa', butterfly:'Kelebek', crab:'Yengeç', octopus:'Ahtapot', rooster:'Horoz', airplane:'Uçak', bicycle:'Bisiklet', train:'Tren', yacht:'Yelkenli', phone:'Telefon', glasses:'Gözlük', hat:'Şapka', shoe:'Ayakkabı', glove:'Eldiven', hammer:'Çekiç', sunflower:'Ayçiçeği' },
  },

  hi: {
    ui:{ tagline:'आज थोड़ा दिमागी व्यायाम।', start:'आज का अभ्यास शुरू करें',
      usual:'हमेशा की तरह', choose:'चुनें', back:'होम', wellDone:'शाबाश!',
      correct:'सही', watch:'देखिए', yourTurn:'आपकी बारी',
      tapColor:'शब्द का रंग दबाएँ', whatIsThis:'यह क्या है?',
      tapOrder:'उसी क्रम में दबाएँ', next:'आगे', settings:'सेटिंग्स',
      language:'भाषा', textSize:'अक्षर का आकार', sound:'ध्वनि',
      gCalc:'गिनती', gMemory:'याददाश्त', gStroop:'रंग', gShape:'आकार', gNumber:'1-2-3 छुएँ',
      tapNumber:'1 से शुरू करके क्रम में संख्याएँ छुएँ',
      tapWordColor:'शब्द का जो रंग मतलब है, उसे छुएँ',
      moneyQ:'कीमत {price} सिक्के है, आप {pay} सिक्के देते हैं। कितने वापस?' },
    colors:{ red:'लाल', blue:'नीला', yellow:'पीला', green:'हरा', black:'काला', purple:'बैंगनी' },
    objects:{ apple:'सेब', banana:'केला', scissors:'कैंची', umbrella:'छाता', key:'चाबी',
      clock:'घड़ी', fish:'मछली', car:'गाड़ी', house:'घर', cup:'कप',
      cat:'बिल्ली', dog:'कुत्ता', elephant:'हाथी', rabbit:'खरगोश', turtle:'कछुआ', butterfly:'तितली', crab:'केकड़ा', octopus:'ऑक्टोपस', rooster:'मुर्गा', airplane:'हवाई जहाज़', bicycle:'साइकिल', train:'रेलगाड़ी', yacht:'पाल नाव', phone:'टेलीफ़ोन', glasses:'चश्मा', hat:'टोपी', shoe:'जूता', glove:'दस्ताने', hammer:'हथौड़ा', sunflower:'सूरजमुखी' },
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

/* ---- 追加UI（もういちど／やめる／中断確認／つづける／もういちど みる／ミス通知）15言語 ---- */
const AGAIN = {
  ja:'もういちど やる', en:'Play again', zh:'再玩一次', 'zh-TW':'再玩一次', ko:'다시 하기',
  es:'Jugar otra vez', pt:'Jogar de novo', fr:'Rejouer', de:'Noch einmal', it:'Gioca ancora',
  nl:'Nog een keer', pl:'Zagraj ponownie', ru:'Ещё раз', tr:'Tekrar oyna', hi:'फिर से खेलें',
};
const QUIT_ = {
  ja:'やめる', en:'Stop', zh:'退出', 'zh-TW':'退出', ko:'그만하기',
  es:'Salir', pt:'Sair', fr:'Arrêter', de:'Beenden', it:'Esci',
  nl:'Stoppen', pl:'Zakończ', ru:'Выйти', tr:'Çık', hi:'बंद करें',
};
const QUITASK = {
  ja:'とちゅうで やめますか？', en:'Stop here?', zh:'要中途退出吗？', 'zh-TW':'要中途退出嗎？', ko:'여기서 그만할까요?',
  es:'¿Salir ahora?', pt:'Sair agora?', fr:'Arrêter ici ?', de:'Jetzt beenden?', it:'Vuoi uscire?',
  nl:'Nu stoppen?', pl:'Zakończyć teraz?', ru:'Закончить сейчас?', tr:'Şimdi bitirelim mi?', hi:'अभी बंद करें?',
};
const KEEPON = {
  ja:'つづける', en:'Keep going', zh:'继续', 'zh-TW':'繼續', ko:'계속하기',
  es:'Seguir', pt:'Continuar', fr:'Continuer', de:'Weiter', it:'Continua',
  nl:'Doorgaan', pl:'Kontynuuj', ru:'Продолжить', tr:'Devam et', hi:'जारी रखें',
};
const WATCHAGAIN = {
  ja:'もういちど みる', en:'Watch again', zh:'再看一次', 'zh-TW':'再看一次', ko:'다시 보기',
  es:'Ver otra vez', pt:'Ver de novo', fr:'Revoir', de:'Nochmal ansehen', it:'Rivedi',
  nl:'Nog eens kijken', pl:'Zobacz ponownie', ru:'Посмотреть ещё раз', tr:'Tekrar izle', hi:'फिर से देखें',
};
const OOPS = {
  ja:'あっ、ちがう。1から じゅんばんに', en:'Oops! Tap 1, 2, 3… in order', zh:'哎呀，不对。要按顺序点哦', 'zh-TW':'哎呀，不對。要按順序點喔', ko:'앗, 아니에요. 1부터 순서대로!',
  es:'¡Uy! En orden desde el 1', pt:'Ops! Em ordem, do 1', fr:'Oups ! Dans l\'ordre, depuis 1', de:'Hoppla! Der Reihe nach ab 1', it:'Ops! In ordine, dal 1',
  nl:'Oeps! Op volgorde vanaf 1', pl:'Ojej! Po kolei od 1', ru:'Ой! По порядку с 1', tr:'Hop! 1\'den sırayla', hi:'अरे! 1 से क्रम में',
};
/* v1.7 かずタッチの まちがいの合図(せってい)と、合図を出さないときの「つぎは 3」 */
const MISSCUE = {
  ja:'かずタッチの まちがいの おと・あかい ひかり', en:'Tap 1-2-3: sound and red flash for a wrong tap',
  zh:'数字点点：点错时的声音和红色闪光', 'zh-TW':'數字點點：點錯時的聲音和紅色閃光', ko:'숫자 터치: 잘못 눌렀을 때 소리와 빨간 빛',
  es:'Toca 1-2-3: sonido y destello rojo al fallar', pt:'Toque 1-2-3: som e luz vermelha ao errar',
  fr:'Touche 1-2-3 : son et flash rouge en cas d\'erreur', de:'Tipp 1-2-3: Ton und rotes Aufblinken bei Fehlern',
  it:'Tocca 1-2-3: suono e lampo rosso se sbagli', nl:'Tik 1-2-3: geluid en rode flits bij een fout',
  pl:'Dotknij 1-2-3: dźwięk i czerwony błysk przy pomyłce', ru:'Нажми 1-2-3: звук и красная вспышка при ошибке',
  tr:'Dokun 1-2-3: yanlış dokununca ses ve kırmızı ışık', hi:'1-2-3 छुएँ: गलती पर आवाज़ और लाल चमक',
};
const CUEON = {
  ja:'だす', en:'On', zh:'开', 'zh-TW':'開', ko:'켜기',
  es:'Sí', pt:'Sim', fr:'Oui', de:'An', it:'Sì',
  nl:'Aan', pl:'Tak', ru:'Да', tr:'Açık', hi:'चालू',
};
const CUEOFF = {
  ja:'ださない', en:'Off', zh:'关', 'zh-TW':'關', ko:'끄기',
  es:'No', pt:'Não', fr:'Non', de:'Aus', it:'No',
  nl:'Uit', pl:'Nie', ru:'Нет', tr:'Kapalı', hi:'बंद',
};
const NEXTIS = {
  ja:'つぎは {n}', en:'Next: {n}', zh:'下一个是 {n}', 'zh-TW':'下一個是 {n}', ko:'다음은 {n}',
  es:'El siguiente: {n}', pt:'O próximo: {n}', fr:'Suivant : {n}', de:'Als Nächstes: {n}', it:'Il prossimo: {n}',
  nl:'Volgende: {n}', pl:'Następna: {n}', ru:'Следующее: {n}', tr:'Sıradaki: {n}', hi:'अगला: {n}',
};
Object.keys(LANG).forEach(k=>{
  LANG[k].ui.missCue = MISSCUE[k];
  LANG[k].ui.cueOn   = CUEON[k];
  LANG[k].ui.cueOff  = CUEOFF[k];
  LANG[k].ui.nextIs  = NEXTIS[k];
});
Object.keys(LANG).forEach(k=>{
  LANG[k].ui.again      = AGAIN[k];
  LANG[k].ui.quit       = QUIT_[k];
  LANG[k].ui.quitAsk    = QUITASK[k];
  LANG[k].ui.keepOn     = KEEPON[k];
  LANG[k].ui.watchAgain = WATCHAGAIN[k];
  LANG[k].ui.oops       = OOPS[k];
});

/* ---- はじめての あそびかた（初回の案内・2026-09-30・15言語） ----
   ヒロさん「ひとつずつ・そよぎ みたいなタイプのアプリは、必ず最初に使い方の丁寧な説明を出してほしい」。
   LANG[k].guide = { title, step, prev, next, start, again, heads[7], bodies[7] }（app.js の openGuide が使う）
   ・かっこ（「」“”«»„“ など）の中の名前は、その言語の画面の文字と同じ（store/_back_check.js が全言語で照らす）
   ・せっていの行は ui.guideTitle（見出し）と ui.guideAgain（ボタン）＝ title と again と同じ文字 */
const GUIDE = {
  ja: { title:"あそびかた", step:"{n} / {m}", prev:"まえ", next:"つぎ", start:"はじめる", again:"あそびかたを もういちど みる",
    heads:[
      "脳活・そよぎへ ようこそ",
      "はじめかた",
      "「けいさん」と「じゅんばん」",
      "「いろ」「かたち」「かずタッチ」",
      "答えと、とちゅうで やめるとき",
      "結果と 記録",
      "見やすく・音"
    ],
    bodies:[
      "このアプリは、5つの 小さな ゲームで、毎日 すこしずつ あたまの体操を する アプリです。\n大きな ボタンを おすだけで あそべます。\nことばは この 下で えらべます。あとから「せってい」でも かえられます。",
      "ホームの「今日のトレーニングを はじめる」を おします。\nつぎに「いつもの」か「むずかしい」を えらぶと はじまります。\n「いつもの」は ゲームの 種類ごとに 順番に 出ます。「むずかしい」は 種類が まざって、問題も すこし むずかしく なります。\n1回は ぜんぶで 21問です。右上に いま 何問目かが 出ます。",
      "「けいさん」は、計算や おつりの 問題の 答えを 4つの 中から えらびます。\n「じゅんばん」は、4つの 色が 光った 順番を おぼえて、同じ 順に おします。\n見のがしたときは「もういちど みる」で もう1回 見られます（1問に 1回）。",
      "「いろ」は、文字の 意味では なく、文字に ぬられた いろを えらびます。「むずかしい」では、ことばの 意味の いろを えらぶ 問題も 出るので、上の 文を よく 読んで ください。\n「かたち」は、黒い かげを 見て、何の 形かを えらびます。\n「かずタッチ」は、ちらばった 数字を 1から 順番に おします。",
      "正解だと ○、まちがいだと ✕ が 出ます。「けいさん」「いろ」「かたち」では、正しい 答えが 緑の わくで わかります。\nとちゅうで やめるときは、左上の「やめる」を おします。「とちゅうで やめますか？」と 出たら、「やめる」で ホームへ、「つづける」で 続きに もどります。\nとちゅうで やめた 回は 記録に のこりません。",
      "さいごまで やると、⭐ と 正解の 数が 出ます。「もういちど やる」で 同じ むずかしさで もう1回 できます。\nホームには「プレイ日数」と「プレイ回数」が 出ます。「記録を見る」の カレンダーで、あそんだ 日を おすと、その日の 結果が 見られます。\n記録は この 端末の 中だけに のこり、どこにも 送られません。登録も いりません。",
      "ホームの 右上の「せってい」で、「ことば」「もじの大きさ」「おと」「おんがく」を かえられます。\n「かずタッチの まちがいの おと・あかい ひかり」を「ださない」に すると、まちがえても 音と 赤い 光が 出ず、つぎに おす 数字だけ 出ます。\nこの 案内は「せってい」の「あそびかたを もういちど みる」で、いつでも 見られます。"
    ] },
  en: { title:"How to play", step:"{n} / {m}", prev:"Previous", next:"Next", start:"Start", again:"See how to play again",
    heads:[
      "Welcome",
      "How to start",
      "“Numbers” and “Memory”",
      "“Colors”, “Shapes” and “Tap 1-2-3”",
      "Answers, and stopping partway",
      "Results and records",
      "Easier to see, and sound"
    ],
    bodies:[
      "This app gives your brain a little workout every day with five small games.\nYou play just by pressing big buttons.\nChoose your language below. You can also change it later in “Settings”.",
      "On the home screen, press “Start today's training”.\nThen choose “Usual” or “Hard” to begin.\n“Usual” goes through the games one kind at a time. “Hard” mixes the kinds, and the questions get a little harder.\nOne round has 21 questions. The top right shows which question you are on.",
      "In “Numbers”, pick the answer to a sum or a change question from four choices.\nIn “Memory”, remember the order in which the four colors light up, and press them in the same order.\nIf you missed it, press “Watch again” to see it once more (once per question).",
      "In “Colors”, pick the color the word is painted in, not the color it names. In “Hard”, some questions ask for the color the word names, so read the line at the top carefully.\nIn “Shapes”, look at the black shadow and pick what it is.\nIn “Tap 1-2-3”, press the scattered numbers in order, starting from 1.",
      "A right answer shows ○ and a wrong one shows ✕. In “Numbers”, “Colors” and “Shapes”, the correct answer is marked with a green frame.\nTo stop partway, press “Stop” at the top left. When “Stop here?” appears, press “Stop” to go home or “Keep going” to continue.\nA round you stop partway is not saved in your records.",
      "At the end you see ⭐ and how many you got right. “Play again” starts another round at the same level.\nThe home screen shows “Days played” and “Times played”. In the “See records” calendar, press a day you played to see that day's results.\nYour records stay only on this device and are never sent anywhere. No sign-up is needed.",
      "With “Settings” at the top right of the home screen you can change “Language”, “Text size”, “Sound” and “Music”.\nIf you set “Tap 1-2-3: sound and red flash for a wrong tap” to “Off”, a wrong tap makes no sound or red flash; only the next number to press is shown.\nYou can see this guide again at any time with “See how to play again” in “Settings”."
    ] },
  zh: { title:"玩法说明", step:"{n} / {m}", prev:"上一步", next:"下一步", start:"开始", again:"再看一次玩法说明",
    heads:[
      "欢迎",
      "开始方法",
      "“计算”和“顺序”",
      "“颜色”“形状”“数字点点”",
      "答案和中途退出",
      "结果和记录",
      "看得清楚·声音"
    ],
    bodies:[
      "这个应用用5个小游戏，让你每天做一点头脑体操。\n只要按大按钮就能玩。\n请在下面选择语言。以后也可以在“设置”里更改。",
      "在首页按“开始今天的训练”。\n然后选择“照常”或“困难”就开始了。\n“照常”按游戏种类依次出题。“困难”会混合各种游戏，题目也稍难一些。\n一轮共21题。右上角显示现在是第几题。",
      "“计算”：从4个选项中选出算式或找零问题的答案。\n“顺序”：记住4种颜色亮起的顺序，按同样的顺序按下。\n没看清时，可以按“再看一次”重看（每题1次）。",
      "“颜色”：不是看字的意思，而是选出字本身的颜色。在“困难”中也会有选字义所表示的颜色的题目，请仔细看上方的提示。\n“形状”：看黑色的影子，选出它是什么。\n“数字点点”：从1开始按顺序点散开的数字。",
      "答对会出现○，答错会出现✕。在“计算”“颜色”“形状”中，正确答案会用绿框标出。\n想中途退出时，按左上角的“退出”。出现“要中途退出吗？”后，按“退出”回首页，按“继续”接着玩。\n中途退出的那一轮不会留下记录。",
      "做完后会显示⭐和答对的数量。按“再玩一次”可以用同样的难度再来一轮。\n首页会显示“游玩天数”和“游玩次数”。在“查看记录”的日历上点玩过的日子，就能看到当天的结果。\n记录只保存在这台设备里，不会发送到任何地方，也不需要注册。",
      "在首页右上角的“设置”里，可以更改“语言”“字号”“声音”“音乐”。\n把“数字点点：点错时的声音和红色闪光”设为“关”，点错时就不会有声音和红光，只显示下一个要点的数字。\n在“设置”里按“再看一次玩法说明”，随时可以再看这份说明。"
    ] },
  'zh-TW': { title:"玩法說明", step:"{n} / {m}", prev:"上一步", next:"下一步", start:"開始", again:"再看一次玩法說明",
    heads:[
      "歡迎",
      "開始方法",
      "「計算」和「順序」",
      "「顏色」「形狀」「數字點點」",
      "答案和中途退出",
      "結果和紀錄",
      "看得清楚・聲音"
    ],
    bodies:[
      "這個應用程式用5個小遊戲，讓你每天做一點頭腦體操。\n只要按大按鈕就能玩。\n請在下面選擇語言。之後也可以在「設定」裡更改。",
      "在首頁按「開始今天的訓練」。\n接著選擇「照常」或「困難」就開始了。\n「照常」依遊戲種類依序出題。「困難」會混合各種遊戲，題目也稍難一些。\n一輪共21題。右上角會顯示現在是第幾題。",
      "「計算」：從4個選項中選出算式或找零問題的答案。\n「順序」：記住4種顏色亮起的順序，照同樣的順序按下。\n沒看清楚時，可以按「再看一次」重看（每題1次）。",
      "「顏色」：不是看字的意思，而是選出字本身的顏色。在「困難」中也會有要選字義所表示顏色的題目，請仔細看上方的提示。\n「形狀」：看黑色的影子，選出它是什麼。\n「數字點點」：從1開始依序點散開的數字。",
      "答對會出現○，答錯會出現✕。在「計算」「顏色」「形狀」中，正確答案會用綠框標出。\n想中途退出時，按左上角的「退出」。出現「要中途退出嗎？」後，按「退出」回首頁，按「繼續」接著玩。\n中途退出的那一輪不會留下紀錄。",
      "做完後會顯示⭐和答對的數量。按「再玩一次」可以用同樣的難度再來一輪。\n首頁會顯示「遊玩天數」和「遊玩次數」。在「查看紀錄」的月曆上點玩過的日子，就能看到當天的結果。\n紀錄只保存在這台裝置裡，不會傳送到任何地方，也不需要註冊。",
      "在首頁右上角的「設定」裡，可以更改「語言」「字級」「聲音」「音樂」。\n把「數字點點：點錯時的聲音和紅色閃光」設為「關」，點錯時就不會有聲音和紅光，只會顯示下一個要點的數字。\n在「設定」裡按「再看一次玩法說明」，隨時可以再看這份說明。"
    ] },
  ko: { title:"하는 방법", step:"{n} / {m}", prev:"이전", next:"다음", start:"시작하기", again:"하는 방법 다시 보기",
    heads:[
      "환영합니다",
      "시작하는 방법",
      "“계산”과 “순서”",
      "“색”, “모양”, “숫자 터치”",
      "정답과 중간에 그만하기",
      "결과와 기록",
      "보기 쉽게 · 소리"
    ],
    bodies:[
      "이 앱은 5가지 작은 게임으로 매일 조금씩 두뇌 체조를 하는 앱입니다.\n큰 버튼을 누르기만 하면 됩니다.\n아래에서 언어를 고르세요. 나중에 “설정”에서도 바꿀 수 있습니다.",
      "홈에서 “오늘의 훈련 시작”을 누르세요.\n그다음 “늘 하던 대로” 또는 “어려움”을 고르면 시작됩니다.\n“늘 하던 대로”는 게임 종류별로 차례대로 나옵니다. “어려움”은 종류가 섞여 나오고 문제도 조금 어려워집니다.\n한 번에 모두 21문제입니다. 오른쪽 위에 지금 몇 번째 문제인지 나옵니다.",
      "“계산”은 계산이나 거스름돈 문제의 답을 4개 중에서 고릅니다.\n“순서”는 4가지 색이 켜진 순서를 기억해서 같은 순서로 누릅니다.\n놓쳤을 때는 “다시 보기”로 한 번 더 볼 수 있습니다(한 문제에 1번).",
      "“색”은 글자의 뜻이 아니라 글자에 칠해진 색을 고릅니다. “어려움”에서는 글자가 뜻하는 색을 고르는 문제도 나오니, 위의 안내를 잘 읽어 주세요.\n“모양”은 검은 그림자를 보고 무엇인지 고릅니다.\n“숫자 터치”는 흩어진 숫자를 1부터 차례대로 누릅니다.",
      "맞히면 ○, 틀리면 ✕가 나옵니다. “계산”, “색”, “모양”에서는 정답이 초록색 테두리로 표시됩니다.\n중간에 그만하려면 왼쪽 위의 “그만하기”를 누르세요. “여기서 그만할까요?”가 나오면 “그만하기”로 홈으로 가고, “계속하기”로 이어서 합니다.\n중간에 그만한 회차는 기록에 남지 않습니다.",
      "끝까지 하면 ⭐과 맞힌 개수가 나옵니다. “다시 하기”를 누르면 같은 난이도로 한 번 더 할 수 있습니다.\n홈에는 “플레이 일수”와 “플레이 횟수”가 나옵니다. “기록 보기”의 달력에서 플레이한 날을 누르면 그날의 결과를 볼 수 있습니다.\n기록은 이 기기 안에만 남고 어디에도 보내지지 않습니다. 가입도 필요 없습니다.",
      "홈 오른쪽 위의 “설정”에서 “언어”, “글자 크기”, “소리”, “음악”을 바꿀 수 있습니다.\n“숫자 터치: 잘못 눌렀을 때 소리와 빨간 빛”을 “끄기”로 하면 틀려도 소리와 빨간 빛이 나오지 않고, 다음에 누를 숫자만 나옵니다.\n이 안내는 “설정”의 “하는 방법 다시 보기”로 언제든지 다시 볼 수 있습니다."
    ] },
  es: { title:"Cómo se juega", step:"{n} / {m}", prev:"Anterior", next:"Siguiente", start:"Empezar", again:"Ver otra vez cómo se juega",
    heads:[
      "Te damos la bienvenida",
      "Cómo empezar",
      "«Números» y «Memoria»",
      "«Colores», «Formas» y «Toca 1-2-3»",
      "Respuestas y cómo salir a mitad",
      "Resultados y registros",
      "Ver mejor y sonido"
    ],
    bodies:[
      "Esta app te ofrece un poco de gimnasia mental cada día con cinco juegos pequeños.\nSolo tienes que pulsar botones grandes.\nElige tu idioma aquí abajo. También puedes cambiarlo después en «Ajustes».",
      "En la pantalla de inicio, pulsa «Empezar el entrenamiento de hoy».\nLuego elige «Lo de siempre» o «Difícil» para empezar.\n«Lo de siempre» presenta los juegos por tipos, uno tras otro. «Difícil» mezcla los tipos y las preguntas son un poco más difíciles.\nCada ronda tiene 21 preguntas. Arriba a la derecha verás en qué pregunta vas.",
      "En «Números», elige entre cuatro opciones el resultado de una cuenta o de un cambio.\nEn «Memoria», recuerda el orden en que se iluminan los cuatro colores y púlsalos en el mismo orden.\nSi te lo perdiste, pulsa «Ver otra vez» para verlo de nuevo (una vez por pregunta).",
      "En «Colores», elige el color con el que está pintada la palabra, no el color que nombra. En «Difícil» también hay preguntas sobre el color que nombra la palabra, así que lee bien la frase de arriba.\nEn «Formas», mira la sombra negra y elige qué es.\nEn «Toca 1-2-3», pulsa en orden los números repartidos por la pantalla, empezando por el 1.",
      "Si aciertas sale ○ y si fallas sale ✕. En «Números», «Colores» y «Formas», la respuesta correcta se marca con un marco verde.\nPara salir a mitad, pulsa «Salir» arriba a la izquierda. Cuando aparezca «¿Salir ahora?», pulsa «Salir» para volver al inicio o «Seguir» para continuar.\nLa ronda que dejas a mitad no se guarda en los registros.",
      "Al terminar verás ⭐ y cuántas acertaste. «Jugar otra vez» empieza otra ronda con la misma dificultad.\nLa pantalla de inicio muestra «Días jugados» y «Veces jugadas». En el calendario de «Ver registros», pulsa un día en que jugaste para ver sus resultados.\nTus registros se quedan solo en este dispositivo y no se envían a ningún sitio. No hace falta registrarse.",
      "En «Ajustes», arriba a la derecha de la pantalla de inicio, puedes cambiar «Idioma», «Tamaño del texto», «Sonido» y «Música».\nSi pones «Toca 1-2-3: sonido y destello rojo al fallar» en «No», al fallar no habrá sonido ni destello rojo; solo se mostrará el siguiente número.\nPuedes volver a ver esta guía cuando quieras con «Ver otra vez cómo se juega» en «Ajustes»."
    ] },
  pt: { title:"Como jogar", step:"{n} / {m}", prev:"Anterior", next:"Próximo", start:"Começar", again:"Ver de novo como jogar",
    heads:[
      "Boas-vindas",
      "Como começar",
      "“Números” e “Memória”",
      "“Cores”, “Formas” e “Toque 1-2-3”",
      "Respostas e como sair no meio",
      "Resultados e registros",
      "Ver melhor e som"
    ],
    bodies:[
      "Este app oferece um pouco de ginástica mental todos os dias com cinco jogos pequenos.\nBasta tocar em botões grandes.\nEscolha o idioma aqui embaixo. Você também pode mudá-lo depois em “Ajustes”.",
      "Na tela inicial, toque em “Começar o treino de hoje”.\nDepois escolha “O de sempre” ou “Difícil” para começar.\n“O de sempre” apresenta os jogos por tipo, um de cada vez. “Difícil” mistura os tipos, e as perguntas ficam um pouco mais difíceis.\nCada rodada tem 21 perguntas. No canto superior direito aparece em qual pergunta você está.",
      "Em “Números”, escolha entre quatro opções a resposta de uma conta ou de um troco.\nEm “Memória”, lembre a ordem em que as quatro cores acendem e toque nelas na mesma ordem.\nSe perdeu, toque em “Ver de novo” para ver mais uma vez (uma vez por pergunta).",
      "Em “Cores”, escolha a cor em que a palavra está pintada, não a cor que ela diz. Em “Difícil” também há perguntas sobre a cor que a palavra diz, então leia bem a frase de cima.\nEm “Formas”, olhe a sombra preta e escolha o que é.\nEm “Toque 1-2-3”, toque nos números espalhados na ordem, começando pelo 1.",
      "Se acertar aparece ○; se errar aparece ✕. Em “Números”, “Cores” e “Formas”, a resposta certa fica marcada com uma moldura verde.\nPara sair no meio, toque em “Sair” no canto superior esquerdo. Quando aparecer “Sair agora?”, toque em “Sair” para voltar ao início ou em “Continuar” para seguir.\nA rodada interrompida não fica nos registros.",
      "No final aparecem ⭐ e quantas você acertou. “Jogar de novo” começa outra rodada com a mesma dificuldade.\nA tela inicial mostra “Dias jogados” e “Vezes jogadas”. No calendário de “Ver registros”, toque num dia em que jogou para ver os resultados daquele dia.\nSeus registros ficam só neste aparelho e não são enviados a lugar nenhum. Não é preciso cadastro.",
      "Em “Ajustes”, no canto superior direito da tela inicial, você pode mudar “Idioma”, “Tamanho do texto”, “Som” e “Música”.\nSe colocar “Toque 1-2-3: som e luz vermelha ao errar” em “Não”, ao errar não haverá som nem luz vermelha; só aparece o próximo número a tocar.\nVocê pode ver este guia de novo quando quiser em “Ver de novo como jogar”, dentro de “Ajustes”."
    ] },
  fr: { title:"Comment jouer", step:"{n} / {m}", prev:"Précédent", next:"Suivant", start:"Commencer", again:"Revoir comment jouer",
    heads:[
      "Bienvenue",
      "Pour commencer",
      "« Calcul » et « Mémoire »",
      "« Couleurs », « Formes » et « Touche 1-2-3 »",
      "Réponses et arrêt en cours de route",
      "Résultats et historique",
      "Lisibilité et son"
    ],
    bodies:[
      "Cette application vous propose un peu de gymnastique du cerveau chaque jour avec cinq petits jeux.\nIl suffit d'appuyer sur de grands boutons.\nChoisissez votre langue ci-dessous. Vous pourrez aussi la changer plus tard dans « Réglages ».",
      "Sur l'écran d'accueil, touchez « Commencer l'entraînement du jour ».\nChoisissez ensuite « Comme d'habitude » ou « Difficile » pour démarrer.\n« Comme d'habitude » présente les jeux par type, l'un après l'autre. « Difficile » mélange les types, et les questions sont un peu plus dures.\nUne partie compte 21 questions. En haut à droite s'affiche le numéro de la question en cours.",
      "Dans « Calcul », choisissez parmi quatre réponses le résultat d'une opération ou d'une monnaie à rendre.\nDans « Mémoire », retenez l'ordre dans lequel les quatre couleurs s'allument, puis touchez-les dans le même ordre.\nSi vous l'avez manqué, touchez « Revoir » pour le revoir (une fois par question).",
      "Dans « Couleurs », choisissez la couleur dans laquelle le mot est écrit, pas celle qu'il désigne. En mode « Difficile », certaines questions demandent la couleur que le mot désigne : lisez bien la phrase du haut.\nDans « Formes », regardez l'ombre noire et choisissez ce que c'est.\nDans « Touche 1-2-3 », touchez les nombres dispersés dans l'ordre, à partir de 1.",
      "Une bonne réponse affiche ○, une mauvaise affiche ✕. Dans « Calcul », « Couleurs » et « Formes », la bonne réponse est entourée d'un cadre vert.\nPour arrêter en cours de route, touchez « Arrêter » en haut à gauche. Quand « Arrêter ici ? » s'affiche, touchez « Arrêter » pour revenir à l'accueil ou « Continuer » pour reprendre.\nUne partie arrêtée en cours de route n'est pas enregistrée dans l'historique.",
      "À la fin s'affichent ⭐ et le nombre de bonnes réponses. « Rejouer » lance une nouvelle partie au même niveau.\nL'écran d'accueil montre « Jours joués » et « Parties jouées ». Dans le calendrier de « Voir l'historique », touchez un jour où vous avez joué pour voir ses résultats.\nVotre historique reste uniquement sur cet appareil et n'est envoyé nulle part. Aucune inscription n'est nécessaire.",
      "Dans « Réglages », en haut à droite de l'accueil, vous pouvez changer « Langue », « Taille du texte », « Son » et « Musique ».\nSi vous réglez « Touche 1-2-3 : son et flash rouge en cas d'erreur » sur « Non », une erreur ne produit ni son ni flash rouge ; seul le prochain nombre à toucher s'affiche.\nVous pouvez revoir ce guide à tout moment avec « Revoir comment jouer » dans « Réglages »."
    ] },
  de: { title:"So wird gespielt", step:"{n} / {m}", prev:"Vorherige", next:"Weiter", start:"Loslegen", again:"Spielanleitung noch einmal ansehen",
    heads:[
      "Willkommen",
      "So fangen Sie an",
      "„Rechnen“ und „Gedächtnis“",
      "„Farben“, „Formen“ und „Tipp 1-2-3“",
      "Antworten und vorzeitig aufhören",
      "Ergebnisse und Verlauf",
      "Besser lesen und Ton"
    ],
    bodies:[
      "Diese App bietet Ihnen jeden Tag ein bisschen Gehirnjogging mit fünf kleinen Spielen.\nSie müssen nur große Knöpfe drücken.\nWählen Sie unten Ihre Sprache. Sie können sie später auch unter „Einstellungen“ ändern.",
      "Tippen Sie auf dem Startbildschirm auf „Heutiges Training starten“.\nWählen Sie dann „Wie immer“ oder „Schwer“, und es geht los.\n„Wie immer“ zeigt die Spiele nach Art geordnet nacheinander. „Schwer“ mischt die Arten, und die Aufgaben werden etwas schwieriger.\nEine Runde hat 21 Aufgaben. Oben rechts sehen Sie, bei welcher Aufgabe Sie sind.",
      "Bei „Rechnen“ wählen Sie aus vier Antworten das Ergebnis einer Rechnung oder das Wechselgeld.\nBei „Gedächtnis“ merken Sie sich, in welcher Reihenfolge die vier Farben aufleuchten, und tippen sie in derselben Reihenfolge an.\nWenn Sie etwas verpasst haben, tippen Sie auf „Nochmal ansehen“ (einmal pro Aufgabe).",
      "Bei „Farben“ wählen Sie die Farbe, in der das Wort geschrieben ist, nicht die Farbe, die es nennt. Bei „Schwer“ wird manchmal nach der Farbe gefragt, die das Wort nennt; lesen Sie also den Satz oben genau.\nBei „Formen“ sehen Sie einen schwarzen Schatten und wählen, was es ist.\nBei „Tipp 1-2-3“ tippen Sie die verstreuten Zahlen der Reihe nach an, beginnend mit 1.",
      "Bei einer richtigen Antwort erscheint ○, bei einer falschen ✕. Bei „Rechnen“, „Farben“ und „Formen“ wird die richtige Antwort grün umrahmt.\nUm vorzeitig aufzuhören, tippen Sie oben links auf „Beenden“. Wenn „Jetzt beenden?“ erscheint, tippen Sie auf „Beenden“, um zum Startbildschirm zu gehen, oder auf „Weiter“, um weiterzuspielen.\nEine vorzeitig beendete Runde wird nicht gespeichert.",
      "Am Ende sehen Sie ⭐ und wie viele Antworten richtig waren. Mit „Noch einmal“ spielen Sie eine neue Runde in derselben Stufe.\nDer Startbildschirm zeigt „Gespielte Tage“ und „Gespielte Runden“. Tippen Sie im Kalender unter „Verlauf ansehen“ auf einen Tag, an dem Sie gespielt haben, um die Ergebnisse zu sehen.\nIhr Verlauf bleibt nur auf diesem Gerät und wird nirgendwohin gesendet. Eine Anmeldung ist nicht nötig.",
      "Unter „Einstellungen“ oben rechts auf dem Startbildschirm können Sie „Sprache“, „Textgröße“, „Ton“ und „Musik“ ändern.\nWenn Sie „Tipp 1-2-3: Ton und rotes Aufblinken bei Fehlern“ auf „Aus“ stellen, gibt es bei einem Fehler weder Ton noch rotes Aufblinken; nur die nächste Zahl wird angezeigt.\nDiese Anleitung öffnen Sie jederzeit wieder mit „Spielanleitung noch einmal ansehen“ unter „Einstellungen“."
    ] },
  it: { title:"Come si gioca", step:"{n} / {m}", prev:"Indietro", next:"Avanti", start:"Inizia", again:"Rivedi come si gioca",
    heads:[
      "Benvenuti",
      "Come iniziare",
      "«Calcolo» e «Memoria»",
      "«Colori», «Forme» e «Tocca 1-2-3»",
      "Risposte e come uscire a metà",
      "Risultati e archivio",
      "Leggere meglio e suoni"
    ],
    bodies:[
      "Questa app ti offre ogni giorno un po' di ginnastica mentale con cinque piccoli giochi.\nBasta premere dei pulsanti grandi.\nScegli la lingua qui sotto. Potrai cambiarla anche dopo in «Impostazioni».",
      "Nella schermata iniziale tocca «Inizia l'allenamento di oggi».\nPoi scegli «Come al solito» o «Difficile» per cominciare.\n«Come al solito» propone i giochi un tipo alla volta. «Difficile» mescola i tipi e le domande sono un po' più difficili.\nOgni giro ha 21 domande. In alto a destra vedi a che domanda sei.",
      "In «Calcolo» scegli tra quattro risposte il risultato di un conto o di un resto.\nIn «Memoria» ricorda l'ordine in cui si accendono i quattro colori e toccali nello stesso ordine.\nSe ti è sfuggito, tocca «Rivedi» per rivederlo (una volta per domanda).",
      "In «Colori» scegli il colore con cui è scritta la parola, non il colore che indica. In «Difficile» alcune domande chiedono il colore che la parola indica, quindi leggi bene la frase in alto.\nIn «Forme» guarda l'ombra nera e scegli che cos'è.\nIn «Tocca 1-2-3» tocca in ordine i numeri sparsi, partendo da 1.",
      "Se la risposta è giusta compare ○, se è sbagliata compare ✕. In «Calcolo», «Colori» e «Forme» la risposta giusta è segnata con una cornice verde.\nPer uscire a metà, tocca «Esci» in alto a sinistra. Quando compare «Vuoi uscire?», tocca «Esci» per tornare alla schermata iniziale o «Continua» per proseguire.\nUn giro interrotto a metà non viene salvato nell'archivio.",
      "Alla fine vedi ⭐ e quante risposte giuste hai dato. «Gioca ancora» avvia un altro giro con la stessa difficoltà.\nLa schermata iniziale mostra «Giorni giocati» e «Volte giocate». Nel calendario di «Vedi archivio», tocca un giorno in cui hai giocato per vederne i risultati.\nL'archivio resta solo su questo dispositivo e non viene inviato da nessuna parte. Non serve registrarsi.",
      "In «Impostazioni», in alto a destra nella schermata iniziale, puoi cambiare «Lingua», «Dimensione testo», «Suono» e «Musica».\nSe imposti «Tocca 1-2-3: suono e lampo rosso se sbagli» su «No», quando sbagli non ci sono né suono né lampo rosso: compare solo il numero successivo da toccare.\nPuoi rivedere questa guida quando vuoi con «Rivedi come si gioca» in «Impostazioni»."
    ] },
  nl: { title:"Zo speel je", step:"{n} / {m}", prev:"Vorige", next:"Volgende", start:"Beginnen", again:"Nog eens bekijken hoe je speelt",
    heads:[
      "Welkom",
      "Zo begin je",
      "“Rekenen” en “Geheugen”",
      "“Kleuren”, “Vormen” en “Tik 1-2-3”",
      "Antwoorden en halverwege stoppen",
      "Uitslag en records",
      "Beter lezen en geluid"
    ],
    bodies:[
      "Deze app geeft je hoofd elke dag een beetje gymnastiek met vijf kleine spelletjes.\nJe hoeft alleen op grote knoppen te drukken.\nKies hieronder je taal. Je kunt die later ook wijzigen bij “Instellingen”.",
      "Tik op het beginscherm op “Begin de training van vandaag”.\nKies dan “Zoals altijd” of “Moeilijk” om te beginnen.\n“Zoals altijd” toont de spellen per soort na elkaar. “Moeilijk” mengt de soorten, en de vragen worden iets moeilijker.\nEen ronde heeft 21 vragen. Rechtsboven zie je bij welke vraag je bent.",
      "Bij “Rekenen” kies je uit vier antwoorden de uitkomst van een som of het wisselgeld.\nBij “Geheugen” onthoud je in welke volgorde de vier kleuren oplichten en tik je ze in dezelfde volgorde aan.\nHeb je het gemist, tik dan op “Nog eens kijken” om het nog één keer te zien (één keer per vraag).",
      "Bij “Kleuren” kies je de kleur waarin het woord geschreven is, niet de kleur die het noemt. Bij “Moeilijk” wordt soms gevraagd naar de kleur die het woord noemt, dus lees de zin bovenaan goed.\nBij “Vormen” kijk je naar de zwarte schaduw en kies je wat het is.\nBij “Tik 1-2-3” tik je de verspreide cijfers op volgorde aan, vanaf 1.",
      "Bij een goed antwoord verschijnt ○, bij een fout antwoord ✕. Bij “Rekenen”, “Kleuren” en “Vormen” krijgt het goede antwoord een groen kader.\nWil je halverwege stoppen, tik dan linksboven op “Stoppen”. Verschijnt “Nu stoppen?”, tik dan op “Stoppen” om naar het beginscherm te gaan of op “Doorgaan” om verder te spelen.\nEen ronde die je halverwege stopt, wordt niet bewaard.",
      "Aan het eind zie je ⭐ en hoeveel je goed had. Met “Nog een keer” speel je nog een ronde op hetzelfde niveau.\nHet beginscherm toont “Gespeelde dagen” en “Keer gespeeld”. Tik in de kalender van “Records bekijken” op een dag waarop je speelde om die uitslagen te zien.\nJe records blijven alleen op dit apparaat en worden nergens naartoe gestuurd. Aanmelden is niet nodig.",
      "Bij “Instellingen” rechtsboven op het beginscherm kun je “Taal”, “Tekstgrootte”, “Geluid” en “Muziek” wijzigen.\nZet je “Tik 1-2-3: geluid en rode flits bij een fout” op “Uit”, dan komt er bij een fout geen geluid of rode flits; alleen het volgende cijfer wordt getoond.\nDeze uitleg kun je altijd opnieuw bekijken met “Nog eens bekijken hoe je speelt” bij “Instellingen”."
    ] },
  pl: { title:"Jak grać", step:"{n} / {m}", prev:"Poprzednia", next:"Dalej", start:"Zacznij", again:"Zobacz ponownie, jak grać",
    heads:[
      "Witamy",
      "Jak zacząć",
      "„Liczby” i „Pamięć”",
      "„Kolory”, „Kształty” i „Dotknij 1-2-3”",
      "Odpowiedzi i przerwanie gry",
      "Wyniki i zapisy",
      "Czytelność i dźwięk"
    ],
    bodies:[
      "Ta aplikacja daje codziennie trochę gimnastyki dla mózgu dzięki pięciu małym grom.\nWystarczy naciskać duże przyciski.\nWybierz język poniżej. Możesz go też zmienić później przyciskiem „Ustawienia”.",
      "Na ekranie głównym naciśnij „Rozpocznij dzisiejszy trening”.\nNastępnie wybierz „Jak zwykle” lub „Trudne”, aby zacząć.\nW trybie „Jak zwykle” gry pojawiają się po kolei według rodzaju. W trybie „Trudne” rodzaje są wymieszane, a pytania nieco trudniejsze.\nJedna runda ma 21 pytań. W prawym górnym rogu widać, które to pytanie.",
      "W grze „Liczby” wybierz spośród czterech odpowiedzi wynik działania lub resztę.\nW grze „Pamięć” zapamiętaj, w jakiej kolejności zapalają się cztery kolory, i naciśnij je w tej samej kolejności.\nJeśli coś umknęło, naciśnij „Zobacz ponownie”, aby zobaczyć to jeszcze raz (raz na pytanie).",
      "W grze „Kolory” wybierz kolor, którym napisane jest słowo, a nie kolor, który ono oznacza. W trybie „Trudne” niektóre pytania dotyczą koloru, który oznacza słowo, więc uważnie czytaj zdanie na górze.\nW grze „Kształty” spójrz na czarny cień i wybierz, co to jest.\nW grze „Dotknij 1-2-3” naciskaj rozrzucone liczby po kolei, zaczynając od 1.",
      "Przy dobrej odpowiedzi pojawia się ○, przy złej ✕. W grach „Liczby”, „Kolory” i „Kształty” dobra odpowiedź jest oznaczona zieloną ramką.\nAby przerwać, naciśnij „Zakończ” w lewym górnym rogu. Gdy pojawi się „Zakończyć teraz?”, naciśnij „Zakończ”, aby wrócić na ekran główny, lub „Kontynuuj”, aby grać dalej.\nPrzerwana runda nie jest zapisywana.",
      "Na końcu widać ⭐ i liczbę dobrych odpowiedzi. „Zagraj ponownie” rozpoczyna kolejną rundę o tej samej trudności.\nEkran główny pokazuje „Dni gry” i „Rozegrane gry”. W kalendarzu pod przyciskiem „Zobacz zapisy” naciśnij dzień z grą, aby zobaczyć jego wyniki.\nZapisy zostają tylko na tym urządzeniu i nie są nigdzie wysyłane. Rejestracja nie jest potrzebna.",
      "Przyciskiem „Ustawienia” w prawym górnym rogu ekranu głównego możesz zmienić „Język”, „Rozmiar tekstu”, „Dźwięk” i „Muzyka”.\nJeśli ustawisz „Dotknij 1-2-3: dźwięk i czerwony błysk przy pomyłce” na „Nie”, pomyłka nie wywoła dźwięku ani czerwonego błysku; pokaże się tylko następna liczba.\nTen przewodnik możesz zobaczyć ponownie w każdej chwili: naciśnij „Ustawienia”, a potem „Zobacz ponownie, jak grać”."
    ] },
  ru: { title:"Как играть", step:"{n} / {m}", prev:"Назад", next:"Далее", start:"Начать", again:"Снова посмотреть, как играть",
    heads:[
      "Добро пожаловать",
      "Как начать",
      "«Счёт» и «Память»",
      "«Цвета», «Формы» и «Нажми 1-2-3»",
      "Ответы и выход посередине",
      "Результаты и записи",
      "Удобство и звук"
    ],
    bodies:[
      "Это приложение каждый день даёт немного гимнастики для ума с помощью пяти небольших игр.\nНужно только нажимать большие кнопки.\nВыберите язык ниже. Потом его можно сменить в разделе «Настройки».",
      "На главном экране нажмите «Начать сегодняшнюю тренировку».\nЗатем выберите «Как обычно» или «Сложно», и игра начнётся.\nВ режиме «Как обычно» игры идут по видам, одна за другой. В режиме «Сложно» виды перемешаны, а задания немного сложнее.\nВ одном раунде 21 задание. Справа вверху видно, какое задание сейчас.",
      "В игре «Счёт» выберите из четырёх вариантов ответ к примеру или сдачу.\nВ игре «Память» запомните, в каком порядке загораются четыре цвета, и нажмите их в том же порядке.\nЕсли вы что-то пропустили, нажмите «Посмотреть ещё раз» (один раз на задание).",
      "В игре «Цвета» выберите цвет, которым написано слово, а не цвет, который оно называет. В режиме «Сложно» иногда нужно выбрать цвет, который называет слово, поэтому внимательно читайте строку вверху.\nВ игре «Формы» посмотрите на чёрную тень и выберите, что это.\nВ игре «Нажми 1-2-3» нажимайте разбросанные числа по порядку, начиная с 1.",
      "При верном ответе появляется ○, при неверном ✕. В играх «Счёт», «Цвета» и «Формы» верный ответ отмечается зелёной рамкой.\nЧтобы выйти посередине, нажмите «Выйти» слева вверху. Когда появится «Закончить сейчас?», нажмите «Выйти», чтобы вернуться на главный экран, или «Продолжить», чтобы играть дальше.\nПрерванный раунд не сохраняется в записях.",
      "В конце вы увидите ⭐ и число верных ответов. «Ещё раз» начинает новый раунд той же сложности.\nНа главном экране видны «Дней игры» и «Всего игр». В календаре раздела «Посмотреть записи» нажмите на день, когда вы играли, чтобы увидеть результаты.\nЗаписи хранятся только на этом устройстве и никуда не отправляются. Регистрация не нужна.",
      "В разделе «Настройки» справа вверху на главном экране можно изменить «Язык», «Размер текста», «Звук» и «Музыка».\nЕсли для «Нажми 1-2-3: звук и красная вспышка при ошибке» выбрать «Нет», при ошибке не будет ни звука, ни красной вспышки; появится только следующее число.\nЭто руководство можно снова открыть в любое время кнопкой «Снова посмотреть, как играть» в разделе «Настройки»."
    ] },
  tr: { title:"Nasıl oynanır", step:"{n} / {m}", prev:"Geri", next:"İleri", start:"Başla", again:"Nasıl oynanır, tekrar bak",
    heads:[
      "Hoş geldiniz",
      "Nasıl başlanır",
      "“Sayılar” ve “Hafıza”",
      "“Renkler”, “Şekiller” ve “Dokun 1-2-3”",
      "Cevaplar ve yarıda bırakma",
      "Sonuçlar ve kayıtlar",
      "Kolay okuma ve ses"
    ],
    bodies:[
      "Bu uygulama, beş küçük oyunla her gün biraz beyin jimnastiği yapmanızı sağlar.\nSadece büyük düğmelere basmanız yeterli.\nDili aşağıdan seçin. Daha sonra “Ayarlar” bölümünden de değiştirebilirsiniz.",
      "Ana sayfada “Bugünün antrenmanını başlat” düğmesine basın.\nSonra “Her zamanki” ya da “Zor” seçeneğini seçince başlar.\n“Her zamanki” oyunları türlerine göre sırayla getirir. “Zor” türleri karıştırır ve sorular biraz zorlaşır.\nBir turda toplam 21 soru vardır. Sağ üstte kaçıncı soruda olduğunuz görünür.",
      "“Sayılar” oyununda bir işlemin ya da para üstünün cevabını dört seçenekten seçersiniz.\n“Hafıza” oyununda dört rengin yanma sırasını aklınızda tutar ve aynı sırayla basarsınız.\nKaçırırsanız “Tekrar izle” düğmesiyle bir kez daha görebilirsiniz (her soruda 1 kez).",
      "“Renkler” oyununda kelimenin anlamını değil, kelimenin yazıldığı rengi seçersiniz. “Zor” modunda bazen kelimenin anlattığı renk sorulur; bu yüzden üstteki cümleyi dikkatle okuyun.\n“Şekiller” oyununda siyah gölgeye bakıp ne olduğunu seçersiniz.\n“Dokun 1-2-3” oyununda dağınık sayılara 1'den başlayarak sırayla basarsınız.",
      "Doğru cevapta ○, yanlış cevapta ✕ çıkar. “Sayılar”, “Renkler” ve “Şekiller” oyunlarında doğru cevap yeşil çerçeveyle gösterilir.\nYarıda bırakmak için sol üstteki “Çık” düğmesine basın. “Şimdi bitirelim mi?” sorusu çıkınca “Çık” ile ana sayfaya döner, “Devam et” ile oyuna devam edersiniz.\nYarıda bırakılan tur kayıtlara geçmez.",
      "Sonunda ⭐ ve kaç doğru yaptığınız görünür. “Tekrar oyna” aynı zorlukta yeni bir tur başlatır.\nAna sayfada “Oynanan gün” ve “Oynama sayısı” görünür. “Kayıtları gör” ile açılan takvimde oynadığınız bir güne basınca o günün sonuçlarını görürsünüz.\nKayıtlar yalnızca bu cihazda kalır ve hiçbir yere gönderilmez. Üyelik gerekmez.",
      "Ana sayfanın sağ üstündeki “Ayarlar” bölümünden “Dil”, “Yazı boyutu”, “Ses” ve “Müzik” ayarlarını değiştirebilirsiniz.\n“Dokun 1-2-3: yanlış dokununca ses ve kırmızı ışık” ayarını “Kapalı” yaparsanız, yanlış dokunuşta ses ve kırmızı ışık çıkmaz; yalnızca sıradaki sayı gösterilir.\nBu rehberi “Ayarlar” bölümündeki “Nasıl oynanır, tekrar bak” düğmesiyle istediğiniz zaman yeniden görebilirsiniz."
    ] },
  hi: { title:"कैसे खेलें", step:"{n} / {m}", prev:"पिछला", next:"आगे", start:"शुरू करें", again:"कैसे खेलें, फिर से देखें",
    heads:[
      "स्वागत है",
      "कैसे शुरू करें",
      "“गिनती” और “याददाश्त”",
      "“रंग”, “आकार” और “1-2-3 छुएँ”",
      "जवाब और बीच में रोकना",
      "नतीजे और रिकॉर्ड",
      "साफ़ दिखना और आवाज़"
    ],
    bodies:[
      "यह ऐप पाँच छोटे खेलों के साथ हर दिन थोड़ा-सा दिमागी व्यायाम कराता है।\nबस बड़े बटन दबाने हैं।\nनीचे अपनी भाषा चुनें। बाद में “सेटिंग्स” में भी बदल सकते हैं।",
      "होम स्क्रीन पर “आज का अभ्यास शुरू करें” दबाएँ।\nफिर “हमेशा की तरह” या “कठिन” चुनें, खेल शुरू हो जाएगा।\n“हमेशा की तरह” में खेल अपने प्रकार के क्रम से आते हैं। “कठिन” में प्रकार मिले-जुले आते हैं और सवाल थोड़े कठिन होते हैं।\nएक दौर में कुल 21 सवाल होते हैं। ऊपर दाईं ओर दिखता है कि अभी कौन-सा सवाल है।",
      "“गिनती” में किसी हिसाब या बाकी पैसे का जवाब चार विकल्पों में से चुनें।\n“याददाश्त” में चार रंग जिस क्रम में चमकते हैं, उसे याद रखें और उसी क्रम में दबाएँ।\nअगर छूट जाए, तो “फिर से देखें” से एक बार और देख सकते हैं (हर सवाल में 1 बार)।",
      "“रंग” में शब्द का मतलब नहीं, बल्कि शब्द जिस रंग में लिखा है, वह रंग चुनें। “कठिन” में कभी-कभी शब्द के मतलब वाला रंग पूछा जाता है, इसलिए ऊपर का वाक्य ध्यान से पढ़ें।\n“आकार” में काली परछाईं देखकर चुनें कि वह क्या है।\n“1-2-3 छुएँ” में बिखरी संख्याओं को 1 से शुरू करके क्रम से दबाएँ।",
      "सही जवाब पर ○ और गलत पर ✕ आता है। “गिनती”, “रंग” और “आकार” में सही जवाब हरे फ्रेम से दिखाया जाता है।\nबीच में रोकना हो तो ऊपर बाईं ओर “बंद करें” दबाएँ। “अभी बंद करें?” आने पर “बंद करें” से होम पर लौटें या “जारी रखें” से आगे खेलें।\nबीच में रोका गया दौर रिकॉर्ड में नहीं जुड़ता।",
      "आखिर में ⭐ और सही जवाबों की संख्या दिखती है। “फिर से खेलें” से उसी कठिनाई पर एक और दौर शुरू होता है।\nहोम स्क्रीन पर “खेले दिन” और “खेले बार” दिखते हैं। “रिकॉर्ड देखें” के कैलेंडर में जिस दिन खेला हो, उसे दबाकर उस दिन के नतीजे देखें।\nरिकॉर्ड सिर्फ़ इसी डिवाइस में रहते हैं और कहीं नहीं भेजे जाते। रजिस्ट्रेशन की ज़रूरत नहीं।",
      "होम स्क्रीन के ऊपर दाईं ओर “सेटिंग्स” में “भाषा”, “अक्षर का आकार”, “ध्वनि” और “संगीत” बदल सकते हैं।\n“1-2-3 छुएँ: गलती पर आवाज़ और लाल चमक” को “बंद” करने पर गलती होने पर न आवाज़ आएगी न लाल चमक; सिर्फ़ अगली संख्या दिखेगी।\nयह गाइड कभी भी “सेटिंग्स” में “कैसे खेलें, फिर से देखें” से दोबारा देख सकते हैं।"
    ] },
};
Object.keys(LANG).forEach(k=>{
  LANG[k].guide = GUIDE[k];
  LANG[k].ui.guideTitle = GUIDE[k].title;   // せっていの見出し
  LANG[k].ui.guideAgain = GUIDE[k].again;   // せっていのボタン
});
