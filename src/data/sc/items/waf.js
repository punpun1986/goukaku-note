import img from "../../../assets/sc_img/waf.png";
const afw = {
  title: "WAF（Web Application Firewall）",
  body: [
    {
      type: "title",
      value: "WAFの概要"
    },
    {
      type: "text",
      value: "WAFはWebアプリケーションを対象としたファイアウォールであり、HTTP/HTTPS通信の内容を解析して攻撃を検知・防御する仕組みである。主にSQLインジェクションやXSSなどのアプリケーション層の攻撃を防ぐ。"
    },
    {
      type: "title",
      value: "従来のFWとの違い"
    },
    {
      type: "list",
      items: [
        "FWはIPアドレスやポート番号で制御（ネットワーク層）",
        "WAFはHTTPの内容まで解析（アプリケーション層）",
        "URLやパラメータ、リクエスト内容を評価して防御"
      ]
    },
    {
      type: "title",
      value: "検知・防御できる主な攻撃"
    },
    {
      type: "list",
      items: [
        "SQLインジェクション",
        "クロスサイトスクリプティング（XSS）",
        "コマンドインジェクション",
        "ディレクトリトラバーサル"
      ]
    },
    {
      type: "title",
      value: "動作方式"
    },
    {
      type: "list",
      items: [
        "シグネチャ型：既知の攻撃パターンと照合",
        "ホワイトリスト型：許可された通信のみ通過",
        "振る舞い検知型：異常なリクエストを検出"
      ]
    },
    {
      type: "title",
      value: "配置パターン"
    },
    {
      type: "list",
      items: [
        "リバースプロキシ型：Webサーバの前段に配置",
        "ネットワーク型：専用機器として導入",
        "クラウド型：クラウドサービスとして提供"
      ]
    },
    {
      type: "title",
      value: "試験ポイント"
    },
    {
      type: "list",
      items: [
        "WAFはアプリケーション層（第7層）で動作する",
        "SQLインジェクションやXSS対策として出題される",
        "FWとの役割の違いを明確に理解する",
        "シグネチャ型とホワイトリスト型の違い"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default afw;