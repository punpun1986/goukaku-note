import img from "../../../assets/sc_img/dnsCachePoisoningContent.png";

const dnsCachePoisoningContent = {
  title: "DNSキャッシュポイズニング",
  body: [
    {
      type: "title",
      value: "DNSキャッシュポイズニングとは"
    },
    {
      type: "text",
      value: "DNSキャッシュポイズニング（DNS Cache Poisoning）は、DNSサーバのキャッシュに偽のDNS情報を登録させる攻撃である。利用者を攻撃者が用意した偽サイトへ誘導し、情報窃取などを行う。"
    },
    {
      type: "title",
      value: "攻撃の仕組み"
    },
    {
      type: "list",
      items: [
        "DNSサーバが名前解決の問い合わせを行う",
        "攻撃者が偽のDNS応答を送信する",
        "DNSサーバが偽情報をキャッシュする",
        "利用者が誤ったIPアドレスへ誘導される"
      ]
    },
    {
      type: "title",
      value: "攻撃による影響"
    },
    {
      type: "list",
      items: [
        "フィッシングサイトへの誘導",
        "IDやパスワードの窃取",
        "マルウェア感染",
        "正規サイトへのアクセス妨害"
      ]
    },
    {
      type: "title",
      value: "攻撃が成立する理由"
    },
    {
      type: "list",
      items: [
        "DNS応答の送信元を十分に検証できない場合がある",
        "トランザクションIDを推測される場合がある",
        "DNS通信は平文で行われる"
      ]
    },
    {
      type: "title",
      value: "主な対策"
    },
    {
      type: "list",
      items: [
        "DNSSECを導入する",
        "トランザクションIDをランダム化する",
        "送信元ポート番号をランダム化する",
        "DNSサーバやソフトウェアを最新化する"
      ]
    },
    {
      type: "title",
      value: "DNSSEC"
    },
    {
      type: "list",
      items: [
        "DNSデータに電子署名を付与する",
        "応答データの改ざんを検知できる",
        "正規のDNS情報であることを確認できる",
        "DNSキャッシュポイズニング対策として重要"
      ]
    },
    {
      type: "title",
      value: "試験ポイント"
    },
    {
      type: "list",
      items: [
        "偽のDNS応答をDNSサーバへ登録させる攻撃",
        "利用者を偽サイトへ誘導する",
        "DNSサーバが攻撃対象となる",
        "DNSSECは電子署名による改ざん検知を実現する",
        "『フィッシングサイト誘導』と関連付けて覚える"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default dnsCachePoisoningContent;
