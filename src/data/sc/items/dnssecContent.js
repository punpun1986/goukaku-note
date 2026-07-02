import img from "../../../assets/sc_img/dnssecContent.png";

const dnssecContent = {
  title: "DNSSEC",
  body: [
    {
      type: "title",
      value: "DNSSECとは"
    },
    {
      type: "text",
      value: "DNSSEC（Domain Name System Security Extensions）は、DNSの応答データに電子署名を付与し、その正当性と完全性を検証する仕組みである。DNSキャッシュポイズニングなどの改ざん攻撃への対策として利用される。"
    },
    {
      type: "title",
      value: "DNSSECの目的"
    },
    {
      type: "list",
      items: [
        "DNS応答データの改ざんを検知する",
        "正規のDNSサーバからの応答であることを確認する",
        "DNSキャッシュポイズニングを防止する",
        "名前解決の信頼性を向上させる"
      ]
    },
    {
      type: "title",
      value: "DNSSECの仕組み"
    },
    {
      type: "list",
      items: [
        "ゾーン情報に電子署名を付与する",
        "公開鍵を用いて署名を検証する",
        "応答データと署名データをセットで送信する",
        "検証に成功した場合のみ応答を信頼する"
      ]
    },
    {
      type: "title",
      value: "主なレコード"
    },
    {
      type: "list",
      items: [
        "DNSKEY：公開鍵を格納する",
        "RRSIG：リソースレコードの電子署名",
        "DS：親ゾーンから子ゾーンへの信頼の連鎖に利用",
        "NSEC/NSEC3：レコードが存在しないことを証明"
      ]
    },
    {
      type: "title",
      value: "信頼の連鎖"
    },
    {
      type: "list",
      items: [
        "ルートゾーンを起点として検証する",
        "親ゾーンが子ゾーンの公開鍵情報を保証する",
        "ルートDNSから対象ドメインまで信頼を引き継ぐ",
        "この仕組みを信頼の連鎖（Chain of Trust）という"
      ]
    },
    {
      type: "title",
      value: "DNSSECで防げるもの・防げないもの"
    },
    {
      type: "list",
      items: [
        "DNS応答の改ざんは防げる",
        "DNSキャッシュポイズニング対策になる",
        "通信内容の暗号化は行わない",
        "盗聴防止の機能は持たない"
      ]
    },
    {
      type: "title",
      value: "試験ポイント"
    },
    {
      type: "list",
      items: [
        "DNSSECは電子署名によってDNSデータの正当性を検証する",
        "機密性ではなく完全性と真正性を提供する",
        "DNSキャッシュポイズニング対策として利用される",
        "DNSKEY・RRSIG・DSレコードは頻出",
        "DNSSECは通信を暗号化しない"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default dnssecContent;
