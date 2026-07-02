import img from "../../../assets/sc_img/ipsec.png";

const ipsec = {
  title: "IPsec（IPセキュリティ）",
  body: [
    {
      type: "title",
      value: "IPsecとは何か"
    },
    {
      type: "text",
      value: "IPsecは、IPネットワーク層で通信を保護するセキュリティ技術です。VPNで広く使用され、通信の暗号化や認証を行い、安全なデータ送受信を実現します。"
    },
    {
      type: "title",
      value: "IPsecの基本機能"
    },
    {
      type: "list",
      items: [
        "暗号化：データ内容を第三者に読めないようにする",
        "認証：通信相手が正しいことを確認する",
        "完全性：データが改ざんされていないことを保証する"
      ]
    },
    {
      type: "title",
      value: "IPsecの主要プロトコル"
    },
    {
      type: "list",
      items: [
        "AH（Authentication Header）：認証と完全性を提供（暗号化なし）",
        "ESP（Encapsulating Security Payload）：暗号化・認証・完全性を提供",
        "IKE（Internet Key Exchange）：鍵交換とセキュリティ設定の確立"
      ]
    },
    {
      type: "title",
      value: "トランスポートモードとトンネルモード"
    },
    {
      type: "list",
      items: [
        "トランスポートモード：データ部分のみを保護（ホスト間通信）",
        "トンネルモード：IPパケット全体を保護（VPNで使用）"
      ]
    },
    {
      type: "title",
      value: "IPsecの通信の流れ"
    },
    {
      type: "text",
      value: "まずIKEで認証と鍵交換を行い、その後ESPなどを用いて暗号化通信を行います。トンネルモードでは元のIPパケットを丸ごとカプセル化して送信します。"
    },
    {
      type: "title",
      value: "試験対策ポイント"
    },
    {
      type: "list",
      items: [
        "AHは暗号化を行わない点に注意",
        "ESPは暗号化と認証を両方提供する",
        "IKEは鍵交換プロトコルである",
        "トンネルモードはVPNで使用される"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default ipsec;