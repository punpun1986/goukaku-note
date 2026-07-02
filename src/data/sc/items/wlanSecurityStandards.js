import img from "../../../assets/sc_img/wlanSecurityStandards.png";

const wlanSecurityStandards = {
  title: "無線LANのセキュリティ規格",
  body: [
    {
      type: "title",
      value: "無線LANのセキュリティ規格とは"
    },
    {
      type: "text",
      value: "無線LANは電波を利用するため、盗聴や不正接続の対策が必要です。そのため通信を暗号化し、利用者を認証するセキュリティ規格が採用されています。"
    },
    {
      type: "title",
      value: "WEP"
    },
    {
      type: "list",
      items: [
        "初期の無線LANセキュリティ規格",
        "RC4による暗号化を使用",
        "暗号鍵の解析が容易",
        "現在は安全性が低く使用非推奨"
      ]
    },
    {
      type: "title",
      value: "WPA"
    },
    {
      type: "list",
      items: [
        "WEPの脆弱性を改善した規格",
        "TKIPによる動的鍵更新を実現",
        "暫定的なセキュリティ対策として普及",
        "現在はWPA2以上の利用が推奨"
      ]
    },
    {
      type: "title",
      value: "WPA2"
    },
    {
      type: "list",
      items: [
        "IEEE 802.11iを基にした規格",
        "AES-CCMPによる強力な暗号化",
        "企業や家庭で広く利用",
        "情報処理安全確保支援士試験で頻出"
      ]
    },
    {
      type: "title",
      value: "WPA3"
    },
    {
      type: "list",
      items: [
        "WPA2の後継規格",
        "SAE認証方式を採用",
        "総当たり攻撃への耐性を向上",
        "オープンネットワークの保護機能も強化"
      ]
    },
    {
      type: "title",
      value: "規格の比較"
    },
    {
      type: "list",
      items: [
        "WEP：脆弱",
        "WPA：WEPの改良版",
        "WPA2：AESによる強固な保護",
        "WPA3：最新かつ最も安全"
      ]
    },
    {
      type: "title",
      value: "試験対策ポイント"
    },
    {
      type: "list",
      items: [
        "WEPは既に解読可能なため使用しない",
        "WPAはTKIPを使用する",
        "WPA2はAES-CCMPを使用する",
        "WPA3はSAE認証を採用する",
        "安全性は WEP ＜ WPA ＜ WPA2 ＜ WPA3"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default wlanSecurityStandards;