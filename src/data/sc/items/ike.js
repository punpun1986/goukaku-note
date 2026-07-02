import img from "../../../assets/sc_img/ike.png";

const ike = {
  title: "IKE（鍵交換プロトコル）",
  body: [
    {
      type: "title",
      value: "IKEとは何か"
    },
    {
      type: "text",
      value: "IKEは、IPsecで使用される鍵交換プロトコルです。通信の前に、お互いの認証と暗号通信に使う鍵の生成・共有を行います。"
    },
    {
      type: "title",
      value: "IKEの目的"
    },
    {
      type: "list",
      items: [
        "通信相手の認証",
        "暗号鍵の安全な生成と共有",
        "IPsecの通信設定（セキュリティパラメータ）の確立"
      ]
    },
    {
      type: "title",
      value: "IKEの処理の流れ"
    },
    {
      type: "list",
      items: [
        "① フェーズ1：通信相手同士で安全な通信路（ISAKMP SA）を確立",
        "② フェーズ2：実際に使うIPsecの設定（IPsec SA）を確立",
        "③ 以降、ESPなどで暗号化通信を実施"
      ]
    },
    {
      type: "title",
      value: "フェーズ1の特徴"
    },
    {
      type: "list",
      items: [
        "相手認証（パスワードや証明書）を行う",
        "鍵交換（Diffie-Hellman）を実施",
        "安全な通信チャネルを構築"
      ]
    },
    {
      type: "title",
      value: "フェーズ2の特徴"
    },
    {
      type: "list",
      items: [
        "IPsecで使用する暗号方式を決定",
        "通信に使うセッション鍵を生成",
        "実際のデータ通信の準備を行う"
      ]
    },
    {
      type: "title",
      value: "IKEv1とIKEv2"
    },
    {
      type: "list",
      items: [
        "IKEv1：フェーズ1・2に分かれる従来方式",
        "IKEv2：より効率的でシンプルな手順に改良",
        "IKEv2は再接続やモバイル環境に強い"
      ]
    },
    {
      type: "title",
      value: "試験対策ポイント"
    },
    {
      type: "list",
      items: [
        "IKEは鍵交換と認証を担当する",
        "フェーズ1は通信路確立、フェーズ2はIPsec設定",
        "Diffie-Hellmanが鍵共有に使われる",
        "IKEの後にESPで暗号通信が行われる"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default ike;
