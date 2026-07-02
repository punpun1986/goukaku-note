import img from "../../../assets/sc_img/crl_ocsp.png";
const crlOcsp = {
  title: "CRLとOCSP",
  body: [
    {
      type: "title",
      value: "CRLとOCSPとは"
    },
    {
      type: "text",
      value: "CRLとOCSPは、証明書が失効（無効）していないかを確認するための仕組みである。PKIにおいて重要な役割を持つ。"
    },
    {
      type: "image",
      value: img
    },
    {
      type: "title",
      value: "なぜ必要か"
    },
    {
      type: "text",
      value: "証明書は有効期限内であっても、不正利用や秘密鍵漏洩などの理由で無効になることがある。そのため、利用時に有効性を確認する必要がある。"
    },

    {
      type: "title",
      value: "CRL（証明書失効リスト）"
    },
    {
      type: "list",
      items: [
        "認証局が発行する失効証明書の一覧",
        "定期的に更新される",
        "クライアントがダウンロードして確認する"
      ]
    },
    {
      type: "text",
      value: "CRLはリスト形式で配布されるため、サイズが大きくなりやすく、リアルタイム性に欠けるという欠点がある。"
    },

    {
      type: "title",
      value: "OCSP（オンライン証明書状態プロトコル）"
    },
    {
      type: "list",
      items: [
        "証明書の状態をリアルタイムで照会する",
        "OCSPレスポンダが応答する",
        "必要な証明書だけ確認できる"
      ]
    },
    {
      type: "text",
      value: "OCSPは必要な証明書だけを問い合わせるため効率が良く、リアルタイム性に優れている。ただし通信が必要になる。"
    },

    {
      type: "title",
      value: "CRLとOCSPの違い（頻出）"
    },
    {
      type: "list",
      items: [
        "CRL：一括取得（重い・遅い）",
        "OCSP：個別確認（軽い・速い）"
      ]
    },

    {
      type: "title",
      value: "試験ポイント"
    },
    {
      type: "list",
      items: [
        "CRLはリスト形式",
        "OCSPはオンライン照会",
        "OCSPの方がリアルタイム性が高い",
        "PKIの失効確認に使用される"
      ]
    }
  ]
};

export default crlOcsp;
