# RAGTIME COFFEE — Webサイト

北海道江別の自家焙煎コーヒー＆キッチンカー「RAGTIME COFFEE」の公式サイト。
ビルド不要の静的サイト（HTML / CSS / バニラJS）。多言語対応（日本語・英語・中国語・韓国語）。

## 構成

```
site/
├─ index.html        ページ本体（全セクション）
├─ css/style.css     デザイン。★ベースカラーは先頭の --base 1行で変わる
├─ js/i18n.js        翻訳辞書（ja / en / zh / ko）
├─ js/main.js        言語切替・ナビ・出店スケジュール描画
├─ data/schedule.json 出店スケジュール（ここを編集すれば自動反映）
└─ assets/           写真・OG画像を置く場所
```

## ★ ブランドカラー

`css/style.css` の先頭 `:root` にまとめてある。色を変えるならここだけ触る。
実車（写真）とロゴ（イラスト）に合わせて設定済み。

```css
:root {
  /* 車体色（ベースカラー）= デニム・スレートブルー */
  --base:      #4f6373;  --base-deep: #384956;  --base-tint: #e8edf1;
  /* ロゴ「OPEN」のオレンジ = 差し色（ヒーローCTA・フッターのホバー等） */
  --accent:    #df7f33;  --accent-deep: #c4691f;
  /* 屋根テント・豆・内装の木目 = 暖色アクセント（ABOUTの木目パネル等） */
  --wood:      #c2a273;  --wood-deep: #9a6b46;  --wood-tint: #efe6d6;
}
```

- ボディの青を変えたいときは `--base` 3色を、差し色の使い方を変えたいときは `--accent` を調整。
- オレンジは「使いすぎない差し色」。広い面には使わない方がブランドが締まる。

## ロゴ・マスコットの差し込み

イラストのロゴ（手を振るマスコット入りのトラック）やワードマークを使う場合:
- `assets/logo.png`（または `logo.svg`）として保存。
- ヘッダーの文字ロゴ（`.brand`）を画像ロゴに差し替え可能。
- マスコットはヒーローやフッターにワンポイントで置くと“2nd season”の遊び心が出る。

→ Claude に画像ファイルを渡せば、ヘッダー/ヒーローへの配置まで反映します。

## 出店スケジュールの更新

`data/schedule.json` の `entries` に1件追加するだけ。日付順に自動ソートされ、
未来の予定が優先表示・過去は自動で薄く表示される。

```json
{
  "date": "2026-07-20",
  "place":   { "ja": "○○マルシェ", "en": "...", "zh": "...", "ko": "..." },
  "address": { "ja": "江別市○○町", "en": "...", "zh": "...", "ko": "..." },
  "time": "10:00 - 16:00",
  "mapUrl": "https://maps.google.com/?q=..."
}
```

- `date` は必須（`YYYY-MM-DD`）。
- `place` / `address` は言語ごとに。`en/zh/ko` を省略すると `ja` が使われる。
- `time` / `mapUrl` は任意。

→ Claude に「○月○日 ○○マルシェ 10時から16時 を出店予定に追加して」と頼めば、この JSON を編集します。

## Instagram 投稿セクションの更新

`data/instagram.json` の `posts` に投稿を並べると、最大6件をグリッド表示する。

```json
{ "permalink": "https://www.instagram.com/p/XXXX/", "image": "assets/ig/1.jpg", "caption": "本日のおすすめ" }
```

- `permalink`（投稿URL）は必須。タイルをクリックするとその投稿へ飛ぶ。
- `image`（サムネ画像）を入れると写真表示、空ならブランド調プレースホルダー。
- `caption` は任意の一言。
- → Claude に「この投稿を載せて（URL）」と渡せば、この JSON に追記します。

### 自動フィードに差し替え（任意・Meta申請ほぼ不要）

「常に最新を自動表示」にしたい場合は、無料ウィジェット（LightWidget / SnapWidget 等）で
@ragtime.coffee のウィジェットを作成し、発行された iframe を `index.html` の
`<div class="ig-grid" id="igGrid">` ごと差し替える。JSON 方式は不要になる。
※ ウィジェット作成にはアカウント側の連携作業が必要（クライアント作業）。

## 写真の差し込み

`assets/` に画像を置き、以下を有効化する。
- ヒーロー: `css/style.css` の `.hero-photo::after` の `background-image`
- ABOUT: `.about-photo` の `background-image`
- OGP: `assets/og.jpg`

## ローカルプレビュー

`fetch` を使うため file:// では動かない。簡易サーバを立てる。

```bash
cd site
python3 -m http.server 8000
# → http://localhost:8000
```

## 公開（GitHub Pages 想定）

`site/` をそのまま公開できる。リポジトリの Pages 設定で `site/` を公開ディレクトリに指定するか、`site/` の中身をルートに置く。

## 多言語の追記

文言は `js/i18n.js` の各言語オブジェクトに `data-i18n` キーで対応。
HTML 側に `data-i18n="セクション.キー"` を付け、4言語ぶんの文言を辞書に足せば反映される。