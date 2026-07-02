import img from "../../../assets/sc_img/vpnBasic.png";

const vpnBasic = {
  title: "VPNの基本",
  body: [
    {
      type: "title",
      value: "VPNとは何か"
    },
    {
      type: "text",
      value: "VPNは、インターネット上に安全な仮想専用回線を作る技術です。本来は公開されているネットワーク（インターネット）を使いながら、あたかも専用線のように安全に通信できます。"
    },
    {
      type: "title",
      value: "VPNの目的"
    },
    {
      type: "list",
      items: [
        "通信内容の盗聴防止（暗号化）",
        "データ改ざんの防止",
        "送信元・送信先の正当性確認",
        "安全なリモートアクセスの実現"
      ]
    },
    {
      type: "title",
      value: "VPNの基本仕組み"
    },
    {
      type: "text",
      value: "VPNでは、通信データを暗号化し、さらにトンネリングという技術でデータをカプセル化します。これにより、インターネット上でも安全にデータを送れます。"
    },
    {
      type: "list",
      items: [
        "暗号化：データを第三者に読めない形にする",
        "トンネリング：データを別のプロトコルで包む",
        "認証：通信相手が正しいか確認する"
      ]
    },
    {
      type: "title",
      value: "VPNの種類"
    },
    {
      type: "list",
      items: [
        "リモートアクセスVPN：自宅などから社内ネットワークへ接続",
        "拠点間VPN：本社と支社を安全に接続",
        "IPsec VPN：ネットワーク層で暗号化",
        "SSL VPN：ブラウザベースで接続可能"
      ]
    },
    {
      type: "title",
      value: "試験対策ポイント"
    },
    {
      type: "list",
      items: [
        "暗号化・認証・完全性の3要素を理解する",
        "トンネリングとカプセル化の違いを理解する",
        "IPsec（AH・ESP）の役割の違いを押さえる",
        "リモートアクセスVPNと拠点間VPNの用途を区別する"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default vpnBasic;