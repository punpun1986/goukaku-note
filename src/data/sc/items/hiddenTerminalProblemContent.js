import img from "../../../assets/sc_img/hiddenTerminalProblemContent.png";

const hiddenTerminalProblemContent = {
  title: "隠れ端末問題",
  body: [
    {
      type: "title",
      value: "隠れ端末問題とは"
    },
    {
      type: "text",
      value: "隠れ端末問題（Hidden Terminal Problem）とは、無線LANにおいて互いの電波が届かない端末同士が同じアクセスポイントに対して同時に送信し、衝突が発生する問題である。"
    },
    {
      type: "title",
      value: "発生する状況"
    },
    {
      type: "list",
      items: [
        "端末Aと端末Bは互いに通信できない",
        "端末Aとアクセスポイントは通信可能",
        "端末Bとアクセスポイントは通信可能",
        "端末Aと端末Bが同時送信するとフレームが衝突する"
      ]
    },
    {
      type: "title",
      value: "有線LANとの違い"
    },
    {
      type: "list",
      items: [
        "有線LANではCSMA/CDを利用する",
        "無線LANでは送信しながら衝突検知が困難",
        "無線LANではCSMA/CAを採用する"
      ]
    },
    {
      type: "title",
      value: "CSMA/CAによる対策"
    },
    {
      type: "list",
      items: [
        "送信前にチャネルが空いているか確認する",
        "ランダムな待ち時間（バックオフ）を設ける",
        "ACKにより正常受信を確認する",
        "衝突そのものを回避することを目的とする"
      ]
    },
    {
      type: "title",
      value: "RTS/CTS方式"
    },
    {
      type: "list",
      items: [
        "RTS（送信要求）をアクセスポイントへ送信",
        "CTS（送信許可）をアクセスポイントが応答",
        "他の端末はCTSを受信して送信を待機する",
        "隠れ端末による衝突を低減できる"
      ]
    },
    {
      type: "title",
      value: "試験ポイント"
    },
    {
      type: "list",
      items: [
        "隠れ端末問題は無線LAN特有の問題",
        "互いに見えない端末同士が同時送信すると発生する",
        "無線LANはCSMA/CAを利用する",
        "RTS/CTSは隠れ端末問題の代表的な対策",
        "CSMA/CDではなくCSMA/CAである点が頻出"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default hiddenTerminalProblemContent;