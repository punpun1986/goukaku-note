import img from "../../../assets/sc_img/macFilteringSsidStealthContent.png";

const macFilteringSsidStealthContent = {
  title: "MACアドレスフィルタリングとSSIDステルス機能",
  body: [
    {
      type: "title",
      value: "MACアドレスフィルタリング"
    },
    {
      type: "text",
      value: "MACアドレスフィルタリングは、事前に登録したMACアドレスを持つ端末のみ無線LANへの接続を許可するアクセス制御機能である。"
    },
    {
      type: "title",
      value: "MACアドレスフィルタリングの仕組み"
    },
    {
      type: "list",
      items: [
        "アクセスポイントに許可端末のMACアドレスを登録する",
        "登録済み端末のみ接続を許可する",
        "未登録端末からの接続要求を拒否する",
        "端末単位でアクセスを制御できる"
      ]
    },
    {
      type: "title",
      value: "MACアドレスフィルタリングの課題"
    },
    {
      type: "list",
      items: [
        "MACアドレスは通信中に取得される可能性がある",
        "MACアドレスの偽装（スプーフィング）が可能",
        "単独では十分なセキュリティ対策にならない",
        "WPA2やWPA3と併用することが重要"
      ]
    },
    {
      type: "title",
      value: "SSIDステルス機能"
    },
    {
      type: "text",
      value: "SSIDステルス機能は、アクセスポイントがSSIDを含むビーコンを送信しないことで、無線LAN一覧にネットワーク名を表示させない機能である。"
    },
    {
      type: "title",
      value: "SSIDステルス機能の特徴"
    },
    {
      type: "list",
      items: [
        "SSIDを一般利用者に見えにくくする",
        "接続時にSSIDを手動入力する必要がある",
        "無線LANの存在を分かりにくくできる",
        "セキュリティ向上効果は限定的である"
      ]
    },
    {
      type: "title",
      value: "SSIDステルス機能の課題"
    },
    {
      type: "list",
      items: [
        "通信解析によってSSIDを特定できる場合がある",
        "不正アクセスを完全には防げない",
        "暗号化や認証の代替にはならない",
        "WPA3などの強固な認証方式と併用すべきである"
      ]
    },
    {
      type: "title",
      value: "試験ポイント"
    },
    {
      type: "list",
      items: [
        "MACアドレスフィルタリングは接続端末を制限する機能",
        "MACアドレスは偽装可能である",
        "SSIDステルスはSSIDを隠す機能",
        "SSIDステルスだけでは不正接続を防げない",
        "どちらも補助的な対策であり、暗号化や認証との併用が必要"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default macFilteringSsidStealthContent;