import img from "../../../assets/sc_img/wlanAuthMode.png";

const wlanAuthMode = {
  title: "パーソナルモードとエンタープライズモード",
  body: [
    {
      type: "title",
      value: "認証モードとは"
    },
    {
      type: "text",
      value: "無線LANでは、接続を許可する利用者を確認するために認証を行います。WPA2やWPA3には、パーソナルモードとエンタープライズモードの2つの認証方式があります。"
    },
    {
      type: "title",
      value: "パーソナルモード"
    },
    {
      type: "list",
      items: [
        "PSK（Pre-Shared Key：事前共有鍵）を使用する",
        "全利用者が同じパスワードを利用する",
        "家庭や小規模オフィス向け",
        "認証サーバは不要"
      ]
    },
    {
      type: "title",
      value: "エンタープライズモード"
    },
    {
      type: "list",
      items: [
        "IEEE 802.1X認証を利用する",
        "RADIUSサーバで利用者ごとに認証する",
        "利用者ごとにIDとパスワードや証明書を使用する",
        "企業や組織向け"
      ]
    },
    {
      type: "title",
      value: "両者の違い"
    },
    {
      type: "list",
      items: [
        "パーソナルは共通パスワード方式",
        "エンタープライズは個別認証方式",
        "パーソナルは管理が容易",
        "エンタープライズはセキュリティと管理性が高い"
      ]
    },
    {
      type: "title",
      value: "エンタープライズモードの認証の流れ"
    },
    {
      type: "list",
      items: [
        "端末がアクセスポイントへ接続要求",
        "アクセスポイントがRADIUSサーバへ認証要求",
        "RADIUSサーバが利用者を認証",
        "認証成功後に通信開始"
      ]
    },
    {
      type: "title",
      value: "試験対策ポイント"
    },
    {
      type: "list",
      items: [
        "パーソナルモードはPSKを使用する",
        "エンタープライズモードはIEEE 802.1Xを使用する",
        "RADIUSサーバはエンタープライズモードで利用される",
        "企業では利用者ごとの管理が可能なエンタープライズモードが主流"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default wlanAuthMode;
``