import img from "../../../assets/sc_img/wlanBasic.png";

const wlanBasic = {
  title: "無線LANの基本",
  body: [
    {
      type: "title",
      value: "無線LANとは何か"
    },
    {
      type: "text",
      value: "無線LANは、電波を使ってネットワーク通信を行う技術です。ケーブルを使わずに、パソコンやスマートフォンをネットワークに接続できます。"
    },
    {
      type: "title",
      value: "構成要素"
    },
    {
      type: "list",
      items: [
        "アクセスポイント（AP）：無線と有線ネットワークを接続する機器",
        "クライアント：PCやスマートフォンなどの端末",
        "無線通信：電波でデータを送受信"
      ]
    },
    {
      type: "title",
      value: "通信の基本仕組み"
    },
    {
      type: "text",
      value: "クライアントはアクセスポイントに接続し、電波を使ってデータを送受信します。アクセスポイントは、そのデータを有線ネットワークやインターネットへ中継します。"
    },
    {
      type: "list",
      items: [
        "SSID：無線ネットワークの名前",
        "チャネル：使用する周波数帯域",
        "電波干渉：他の機器との影響"
      ]
    },
    {
      type: "title",
      value: "セキュリティ方式"
    },
    {
      type: "list",
      items: [
        "WEP：古い方式で安全性が低い",
        "WPA：WEPの改良版",
        "WPA2：現在広く利用される安全な方式",
        "WPA3：より強固な最新の方式"
      ]
    },
    {
      type: "title",
      value: "接続の流れ"
    },
    {
      type: "list",
      items: [
        "SSIDを指定してアクセスポイントを検出",
        "認証（パスワードなど）を行う",
        "IPアドレスを取得し通信開始"
      ]
    },
    {
      type: "title",
      value: "試験対策ポイント"
    },
    {
      type: "list",
      items: [
        "アクセスポイントの役割を理解する",
        "WEPは脆弱で使用不可レベルである点を押さえる",
        "WPA2/WPA3が主流",
        "電波干渉（2.4GHzと5GHz）の特徴を理解する"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default wlanBasic;