import img from "../../../assets/sc_img/ipsContent.png";

const ipsContent = {
  title: "IPS（不正侵入防止システム）",
  body: [
    {
      type: "title",
      value: "IPSの概要"
    },
    {
      type: "text",
      value: "IPS（Intrusion Prevention System）は、ネットワークを流れる通信を監視し、不正アクセスや攻撃を検知した際に自動的に遮断するシステムである。IDSの検知機能に加えて防御機能を持つ。"
    },
    {
      type: "title",
      value: "主な特徴"
    },
    {
      type: "list",
      items: [
        "不正通信をリアルタイムで検知・遮断",
        "通信をブロックすることで被害の拡大を防ぐ",
        "ネットワークの経路上に設置される（インライン型）"
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
        "異常検知型：通常と異なる挙動を検出"
      ]
    },
    {
      type: "title",
      value: "IDSとの違い"
    },
    {
      type: "list",
      items: [
        "IPS：検知＋遮断（アクティブ防御）",
        "IDS：検知＋通知（パッシブ監視）",
        "IPSは通信経路上に配置、IDSはミラーリングで監視も可能"
      ]
    },
    {
      type: "title",
      value: "メリットと注意点"
    },
    {
      type: "list",
      items: [
        "攻撃を即座に防げる",
        "誤検知による通信遮断リスクがある",
        "パフォーマンスへの影響を考慮する必要がある"
      ]
    },
    {
      type: "title",
      value: "試験ポイント"
    },
    {
      type: "list",
      items: [
        "IPSは通信を遮断する点が最大の特徴",
        "IDSとの違い（遮断の有無）は頻出",
        "インライン配置で動作する点を理解",
        "誤検知による業務影響も重要論点"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default ipsContent;