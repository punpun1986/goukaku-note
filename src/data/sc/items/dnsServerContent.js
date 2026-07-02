import img from "../../../assets/sc_img/dnsServerContent.png";

const dnsServerContent = {
  title: "DNSサーバ",
  body: [
    {
      type: "title",
      value: "DNSサーバの概要"
    },
    {
      type: "text",
      value: "DNS（Domain Name System）は、ドメイン名とIPアドレスを対応付ける仕組みである。DNSサーバは、人間が理解しやすいドメイン名をコンピュータが通信に利用するIPアドレスへ変換する役割を担う。"
    },
    {
      type: "title",
      value: "DNSが必要な理由"
    },
    {
      type: "list",
      items: [
        "IPアドレスを覚える必要がない",
        "ドメイン名でサーバへアクセスできる",
        "IPアドレス変更時も利用者への影響を抑えられる"
      ]
    },
    {
      type: "title",
      value: "名前解決の流れ"
    },
    {
      type: "list",
      items: [
        "利用者がWebサイトのURLを入力する",
        "PCがDNSサーバへ問い合わせを行う",
        "DNSサーバがドメイン名に対応するIPアドレスを検索する",
        "IPアドレスをPCへ返却する",
        "PCが取得したIPアドレスへ接続する"
      ]
    },
    {
      type: "title",
      value: "DNSサーバの種類"
    },
    {
      type: "list",
      items: [
        "キャッシュDNSサーバ：問い合わせ結果を一時保存する",
        "権威DNSサーバ：ドメイン名とIPアドレスの正式情報を管理する",
        "ルートDNSサーバ：トップレベルドメインの管理情報を提供する"
      ]
    },
    {
      type: "title",
      value: "主なDNSレコード"
    },
    {
      type: "list",
      items: [
        "Aレコード：ドメイン名とIPv4アドレスを対応付ける",
        "AAAAレコード：ドメイン名とIPv6アドレスを対応付ける",
        "MXレコード：メールサーバを指定する",
        "CNAMEレコード：別名（エイリアス）を定義する"
      ]
    },
    {
      type: "title",
      value: "DNSに関する脅威"
    },
    {
      type: "list",
      items: [
        "DNSキャッシュポイズニング",
        "DNSスプーフィング",
        "DoS攻撃によるサービス停止",
        "不正な名前解決による誘導"
      ]
    },
    {
      type: "title",
      value: "試験ポイント"
    },
    {
      type: "list",
      items: [
        "DNSはドメイン名をIPアドレスへ変換する仕組み",
        "名前解決の流れは頻出",
        "AレコードとMXレコードの用途を覚える",
        "キャッシュDNSサーバと権威DNSサーバの違いを理解する",
        "DNSキャッシュポイズニングは重要な攻撃手法である"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default dnsServerContent;