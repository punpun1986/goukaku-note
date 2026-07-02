import img from "../../../assets/sc_img/digitalCertificateValidationContent.png";

const digitalCertificateValidationContent = {
  title: "デジタル証明書の検証",
  body: [
    {
      type: "title",
      value: "デジタル証明書とは"
    },
    {
      type: "text",
      value: "デジタル証明書は、公開鍵とその所有者情報を結び付ける電子的な証明書である。認証局（CA）が電子署名を付与することで、公開鍵の正当性を保証する。"
    },
    {
      type: "title",
      value: "証明書検証の目的"
    },
    {
      type: "list",
      items: [
        "接続先が正規のサーバであることを確認する",
        "公開鍵が改ざんされていないことを確認する",
        "なりすましや中間者攻撃を防止する"
      ]
    },
    {
      type: "title",
      value: "証明書検証の流れ"
    },
    {
      type: "list",
      items: [
        "サーバからデジタル証明書を受信する",
        "証明書の発行者（CA）を確認する",
        "CAの公開鍵で電子署名を検証する",
        "証明書の有効期限を確認する",
        "失効情報（CRL、OCSP）を確認する",
        "検証成功後に公開鍵を信頼する"
      ]
    },
    {
      type: "title",
      value: "証明書チェーン"
    },
    {
      type: "list",
      items: [
        "サーバ証明書から上位CAをたどる",
        "最終的にルート認証局（Root CA）まで検証する",
        "信頼済みルート証明書に到達できれば信頼できる"
      ]
    },
    {
      type: "title",
      value: "失効確認"
    },
    {
      type: "list",
      items: [
        "CRL（Certificate Revocation List）：証明書失効リスト",
        "OCSP（Online Certificate Status Protocol）：オンラインで失効状態を確認",
        "秘密鍵漏えい時などに証明書は失効される"
      ]
    },
    {
      type: "title",
      value: "試験ポイント"
    },
    {
      type: "list",
      items: [
        "公開鍵そのものではなくCAの署名を検証する",
        "ルートCAまでの証明書チェーンを確認する",
        "有効期限と失効状態を確認する",
        "証明書検証によって中間者攻撃を防止する",
        "CRLとOCSPの違いは頻出"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default digitalCertificateValidationContent;