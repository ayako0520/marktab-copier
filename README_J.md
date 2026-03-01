# MarkTab Copier

ブラウザのタブをMarkdown形式のリンクとしてコピーするシンプルなChrome拡張機能です。

![Version](https://img.shields.io/badge/version-0.9.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

[English](README.md) | 日本語

## 機能

- 📋 **現在のタブをコピー** - アクティブなタブをMarkdownリンクとしてコピー：`[タイトル](URL)`
- 📑 **全タブをコピー** - 開いている全タブを一括コピー（1行ずつ）
- 🎨 **シンプルなUI** - ダークテーマのミニマルデザイン
- 🔒 **プライバシー重視** - データ収集なし、すべてローカル処理
- ⚡ **シンプル＆高速** - 設定不要、すぐに使える

## インストール

### Chrome Web Storeから
[近日公開予定 - 審査中]

### 手動インストール（開発者モード）
1. このリポジトリをダウンロードまたはクローン
2. Chromeで `chrome://extensions/` を開く
3. 右上の「デベロッパーモード」をONにする
4. 「パッケージ化されていない拡張機能を読み込む」をクリック
5. `marktab-copier` フォルダを選択

## 使い方

1. ツールバーのMarkTab Copierアイコンをクリック
2. 以下のいずれかを選択：
   - **Copy Current Tab** - アクティブなタブをコピー
   - **Copy All Tabs** - 現在のウィンドウの全タブをコピー
3. どこでも貼り付け - Markdown形式のリンクが使えます！

### 出力例

**単一タブ：**
```markdown
[GitHub](https://github.com)
```

**複数タブ：**
```markdown
[NASA](https://www.nasa.gov)
[JAXA](https://www.jaxa.jp)
[Space.com](https://www.space.com)
```

## 用途

- 📝 Markdownエディタでのノート作成（Obsidian、Notion、Logseqなど）
- 📚 参考リンク付きドキュメント作成
- 🔗 複数リンクの素早い共有
- 🔍 リサーチやコンテンツキュレーション

## プライバシー

MarkTab Copierは、ユーザーデータを**一切収集、保存、送信しません**。

- アナリティクスやテレメトリなし
- 閲覧履歴の追跡なし
- すべての処理はブラウザ内でローカルに実行
- 外部サーバーへの通信なし

詳細は[PRIVACY_POLICY_JA.txt](PRIVACY_POLICY_JA.txt)をご覧ください。

## 権限

- **activeTab** - コピーボタンをクリックした際に、現在のタブのタイトルとURLを読み取るために必要
- **tabs** - 「Copy All Tabs」使用時に、全タブにアクセスするために必要

## 開発

これは初期バージョン（v0.9.0）です。フィードバックや改善案を歓迎します！

### ファイル構成
```
marktab-copier/
├── manifest.json          # 拡張機能の設定
├── popup.html            # ポップアップのUI
├── popup.js              # メイン機能
├── style.css             # スタイル
├── icon16.png            # アイコン (16x16)
├── icon48.png            # アイコン (48x48)
├── icon128.png           # アイコン (128x128)
├── PRIVACY_POLICY.txt    # プライバシーポリシー（英語）
└── PRIVACY_POLICY_JA.txt # プライバシーポリシー（日本語）
```

## 今後の予定

将来のバージョンで検討中の機能：
- リンク形式のカスタマイズ
- キーボードショートカット
- 選択したタブのみコピー
- ファイルへのエクスポート

## フィードバック

バグを見つけたり、機能のリクエストがある場合は、[Issue](https://github.com/ayako0520/marktab-copier/issues)を開いてください。

## ライセンス

MIT License - 自由に使用、変更、配布できます。

## 作者

[ayako0520](https://github.com/ayako0520) が作成

---

**役に立ったら、このリポジトリに Star ⭐ をお願いします！**