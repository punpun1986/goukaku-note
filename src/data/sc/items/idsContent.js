import img from "../../../assets/sc_img/idsContent.png";

const idsContent = {
  title: "IDS（不正侵入検知システム）",
  body: [
    {
      type: "title",
      value: "IDSの概要"
    },
    {
      type: "text",
      value: "IDS（Intrusion Detection System）は、ネットワークやホストを監視し、不正アクセスや攻撃の兆候を検知して管理者へ通知するシステムである。防御ではなく検知・警告が主な役割である。"
    },
    {
      type: "title",
      value: "主な特徴"
    },
    {
      type: "list",
      items: [
        "攻撃の検知とログ記録を行う",
        "不審な通信を管理者へ通知する",
        "通信の遮断は基本的に行わない"
      ]
    },
    {
      type: "title",
      value: "種類"
    },
    {
      type: "list",
      items: [
        "NIDS（ネットワーク型）：ネットワーク全体の通信を監視",
        "HIDS（ホスト型）：特定のサーバや端末を監視"
      ]
    },
    {
      type: "title",
      value: "検知方式"
    },
    {
      type: "list",
      items: [
        "シグネチャ型：既知の攻撃パターンと照合",
        "異常検知型：通常時と異なる振る舞いを検知"
      ]
    },
    {
      type: "title",
      value: "IDSとIPSの違い"
    },
    {
      type: "list",
      items: [
        "IDS：検知と通知のみ",
        "IPS：検知に加えて通信を遮断",
        "IDSは受動的、IPSは能動的に防御"
      ]
    },
    {
      type: "title",
      value: "試験ポイント"
    },
    {
      type: "list",
      items: [
        "IDSは『検知』が役割であり遮断しない",
        "NIDSとHIDSの違いは監視対象",
        "シグネチャ型は未知攻撃に弱い",
        "異常検知型は誤検知が発生しやすい"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default idsContent;