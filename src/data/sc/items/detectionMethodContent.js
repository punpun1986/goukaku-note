import img from "../../../assets/sc_img/detectionMethodContent.png";

const detectionMethodContent = {
  title: "検知方式と誤検知",
  body: [
    {
      type: "title",
      value: "検知方式の概要"
    },
    {
      type: "text",
      value: "IDSやIPSでは、攻撃を検知するために複数の検知方式が用いられる。代表的なものにシグネチャ型と異常検知型があり、それぞれ特徴と誤検知の傾向が異なる。"
    },
    {
      type: "title",
      value: "シグネチャ型（パターンマッチング）"
    },
    {
      type: "list",
      items: [
        "既知の攻撃パターン（シグネチャ）と照合する",
        "検知精度が高く誤検知が少ない",
        "未知の攻撃には対応できない",
        "シグネチャの更新が必要"
      ]
    },
    {
      type: "title",
      value: "異常検知型（アノマリ検知）"
    },
    {
      type: "list",
      items: [
        "通常時の挙動を学習し逸脱を検知する",
        "未知の攻撃にも対応可能",
        "正常な挙動も異常と判断する場合がある",
        "誤検知が発生しやすい"
      ]
    },
    {
      type: "title",
      value: "誤検知と見逃し"
    },
    {
      type: "list",
      items: [
        "誤検知（False Positive）：正常な通信を攻撃と判断",
        "見逃し（False Negative）：攻撃を検知できない",
        "異常検知型は誤検知が多い",
        "シグネチャ型は未知攻撃の見逃しが課題"
      ]
    },
    {
      type: "title",
      value: "運用上のポイント"
    },
    {
      type: "list",
      items: [
        "シグネチャの定期更新が必要",
        "閾値やルールの調整で誤検知を低減",
        "ログ分析とチューニングが重要",
        "複数の検知方式を組み合わせる（多層防御）"
      ]
    },
    {
      type: "title",
      value: "試験ポイント"
    },
    {
      type: "list",
      items: [
        "シグネチャ型＝既知攻撃・誤検知少・未知攻撃に弱い",
        "異常検知型＝未知攻撃対応・誤検知多",
        "False PositiveとFalse Negativeの区別",
        "IPSでは誤検知が通信遮断に直結する点が重要"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default detectionMethodContent;