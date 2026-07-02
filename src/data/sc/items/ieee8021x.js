import img from "../../../assets/sc_img/ieee8021x.png";

const ieee8021x = {
  title: "IEEE 802.1X認証",
  body: [
    {
      type: "title",
      value: "IEEE 802.1X認証とは"
    },
    {
      type: "text",
      value: "IEEE 802.1X認証は、ネットワークへ接続する利用者や端末を認証する仕組みです。無線LANのエンタープライズモードで広く利用され、不正な端末の接続を防ぎます。"
    },
    {
      type: "title",
      value: "構成要素"
    },
    {
      type: "list",
      items: [
        "サプリカント：認証を受ける利用者端末",
        "オーセンティケータ：アクセスポイントやスイッチ",
        "認証サーバ：RADIUSサーバ"
      ]
    },
    {
      type: "title",
      value: "認証の流れ"
    },
    {
      type: "list",
      items: [
        "① サプリカントがネットワーク接続を要求",
        "② オーセンティケータが認証情報を要求",
        "③ 認証情報をRADIUSサーバへ転送",
        "④ RADIUSサーバが認証を実施",
        "⑤ 認証成功後に通信を許可"
      ]
    },
    {
      type: "title",
      value: "EAPとは"
    },
    {
      type: "text",
      value: "IEEE 802.1XではEAP（Extensible Authentication Protocol）を使用して認証を行います。EAPはさまざまな認証方式を利用できる柔軟な認証フレームワークです。"
    },
    {
      type: "list",
      items: [
        "EAP-TLS：証明書を利用した相互認証",
        "PEAP：TLSトンネル内で認証を実施",
        "EAP-TTLS：TLSを利用した認証方式"
      ]
    },
    {
      type: "title",
      value: "導入するメリット"
    },
    {
      type: "list",
      items: [
        "利用者ごとに認証できる",
        "共通パスワードが不要",
        "不正端末の接続を防止できる",
        "認証履歴の管理が容易"
      ]
    },
    {
      type: "title",
      value: "試験対策ポイント"
    },
    {
      type: "list",
      items: [
        "802.1Xはポートベース認証である",
        "サプリカント・オーセンティケータ・認証サーバの3者構成",
        "認証サーバにはRADIUSを利用する",
        "EAPが認証方式を提供する",
        "無線LANエンタープライズモードで利用される"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default ieee8021x;