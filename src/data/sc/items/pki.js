import img from "../../../assets/sc_img/pki.png";

const pki = {
  title: "PKIの仕組み",
  body: [
    {
      type: "title",
      value: "PKI（Public Key Infrastructure）とは"
    },
    {
      type: "text",
      value: "公開鍵暗号とデジタル証明書を使って、通信相手が正しい相手であることを保証する仕組み。"
    },
    {
      type: "image",
      value: img
    },

    {
      type: "title",
      value: "PKIの構成要素"
    },
    {
      type: "list",
      items: [
        "利用者（エンティティ）",
        "認証局（CA）",
        "登録局（RA）",
        "リポジトリ"
      ]
    },

    {
      type: "title",
      value: "重要ポイント"
    },
    {
      type: "text",
      value: "PKIは公開鍵が正しいかを証明する仕組みで、HTTPS通信の基盤となる。"
    }
  ]
};

export default pki;
