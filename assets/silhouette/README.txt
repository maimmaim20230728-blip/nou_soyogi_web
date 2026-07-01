■ シルエットクイズ用の画像（フリー素材）の入れ方

いまは画像が無くても「絵文字を黒く塗ったシルエット」で動きます。
もっとハッキリした絵にしたいときは、下記の手順でフリー素材に差し替えできます。

1) 商用利用OKのフリー素材（例: いらすとや 等）から、下の物のイラストを用意する。
   apple / banana / scissors / umbrella / key / clock / fish / car / house / cup

2) 背景が透明の PNG にして、このフォルダに置く。ファイル名は物のID + .png。
   例:  assets/silhouette/apple.png

3) data/config.js の OBJECTS で、その物の img に道を書く。
   例:  { id:'apple', emoji:'🍎', img:'assets/silhouette/apple.png' },

これだけで、シルエット表示・3択イラストの両方が自動でその画像に切り替わります。
（img が空のままなら、これまで通り絵文字を使います）

※ シルエットは画像を自動で真っ黒に塗って表示します。カラーのイラストを入れてOKです。
※ 物を増やしたいときは OBJECTS に新しい行を足すだけ（全言語の名前は data/lang.js に追記）。
