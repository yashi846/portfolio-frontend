# ポートフォリオ フロントエンド

Next.js / TypeScript / Tailwind CSS で構築した個人ポートフォリオサイトです。`next-intl` による日本語・英語の多言語対応、ライト/ダークテーマ切り替えに対応しています。

## 技術スタック

- Next.js 15 + React 19 + TypeScript
- Tailwind CSS v4（`@tailwindcss/postcss` / `tw-animate-css`）
- Radix UI primitives + shadcn/ui スタイルパターン
- 多言語化: `next-intl`
- テーマ切り替え: `next-themes`

## 機能

- レスポンシブでアクセシブルな UI
- ライト/ダークテーマ切り替え（システム設定もサポート）
- i18n（ja/en）：Cookie 永続化 + Accept-Language フォールバック
- 作品一覧（Works）：ダイアログカードで詳細・画像・外部リンク表示

## ディレクトリ構成

```text
components/            # 再利用可能なコンポーネント（ui/, navigation, footer など）
config/                # サイト設定
hooks/                 # カスタムフック（例: useIsMobile）
lib/                   # ユーティリティ（例: cn）
messages/              # i18n メッセージ（en.json / ja.json）
public/                # 静的アセット（images など）
src/app/               # App Router のページとスタイル
src/i18n/              # next-intl のリクエスト設定
```

## 多言語化（next-intl）

- `src/i18n/request.ts` でロケール判定を実施：
  - `locale` Cookie があればそれを使用
  - なければ `Accept-Language` から ja を優先、それ以外は en
- 翻訳文は `messages/en.json` / `messages/ja.json` に格納
- `TranslateButton` で `locale` Cookie を切替、`router.refresh()` で再取得
