# 脳活アプリ・そよぎ（Web版 / Farcaster Mini App）

高齢者向けの、**オフラインで動く・完全無料・広告なし**の脳トレアプリ（Web版）。
このリポジトリは **Vercel 配信 / Farcaster Mini App 用の純静的サイト**です。
Android（Google Play / AAB）版は別リポジトリ `nou-soyogi`（Capacitor）で管理しています。

An offline, free, ad-free brain-training app for older adults — 4 mini-games in 15 languages.

## 公開
- 本番URL: https://nou-soyogi-web.vercel.app/
- Farcaster Mini App マニフェスト: `/.well-known/farcaster.json`
- 埋め込み画像（3:2）: `icons/farcaster-embed.png`

## ミニゲーム
1. けいさん（計算・ワーキングメモリ）
2. じゅんばん（順番記憶・サイモン）
3. いろ（ストループ・判断力）
4. かたち（シルエット・視空間認知）

## 技術
素の HTML / CSS / JavaScript（PWA）。Service Worker + localStorage で完全オフライン・記録は端末内に保持。
外部通信は Farcaster 内での SDK 読み込み（esm.sh）のみで、通常/オフライン時は無害にスキップ。

## 開発 / Credit
アプリ開発：介護と支援の相談どころ **そよぎ** — https://soyogi.hp.peraichi.com/top
