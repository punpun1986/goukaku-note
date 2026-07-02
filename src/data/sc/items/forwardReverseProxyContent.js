import img from "../../../assets/sc_img/forwardReverseProxyContent.png";

const forwardReverseProxyContent = {
  title: "フォワードプロキシとリバースプロキシ",
  body: [
    {
      type: "title",
      value: "プロキシの概要"
    },
    {
      type: "text",
      value: "プロキシはクライアントとサーバの間に入り、通信を中継する仕組みである。アクセス制御やキャッシュ、セキュリティ向上などを目的として利用される。"
    },
    {
      type: "title",
      value: "フォワードプロキシ"
    },
    {
      type: "list",
      items: [
        "クライアントの代理として外部サーバへアクセス",
        "社内ユーザの通信を制御・監視する用途",
        "アクセス制限やログ取得が可能",
        "匿名化（クライアントIPを隠す）に利用される"
      ]
    },
    {
      type: "title",
      value: "リバースプロキシ"
    },
    {
      type: "list",
      items: [
        "サーバの代理としてクライアントからの要求を受ける",
        "Webサーバの負荷分散（ロードバランサ）として利用",
        "サーバの内部構成を隠蔽できる",
        "SSL終端やキャッシュ機能を提供"
      ]
    },
    {
      type: "title",
      value: "違いの本質"
    },
    {
      type: "list",
      items: [
        "フォワード：クライアント側に立つ（外向き）",
        "リバース：サーバ側に立つ（内向き）",
        "フォワードは利用者を保護、リバースはサーバを保護",
        "配置位置と目的が逆"
      ]
    },
    {
      type: "title",
      value: "利用シーン"
    },
    {
      type: "list",
      items: [
        "フォワード：企業内のWebアクセス制御",
        "フォワード：フィルタリングやログ監視",
        "リバース：Webサービスの負荷分散",
        "リバース：WAFやSSL終端との組み合わせ"
      ]
    },
    {
      type: "title",
      value: "試験ポイント"
    },
    {
      type: "list",
      items: [
        "フォワードはクライアントの代理、リバースはサーバの代理",
        "フォワードは外部アクセス制御に使う",
        "リバースは負荷分散・セキュリティ強化に使う",
        "「どちらの立場か（クライアントかサーバか）」が最重要"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default forwardReverseProxyContent;