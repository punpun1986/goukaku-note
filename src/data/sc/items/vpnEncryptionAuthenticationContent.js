import img from "../../../assets/sc_img/vpnEncryptionAuthenticationContent.png";

const vpnEncryptionAuthenticationContent = {
  title: "VPNの暗号化範囲と認証範囲",
  body: [
    {
      type: "title",
      value: "VPNの概要"
    },
    {
      type: "text",
      value: "VPN（Virtual Private Network）は、公衆ネットワーク上に仮想的な専用線を構築する技術である。暗号化と認証によって、安全に通信を行う。"
    },
    {
      type: "title",
      value: "暗号化の目的"
    },
    {
      type: "list",
      items: [
        "通信内容の盗聴を防止する",
        "第三者によるデータ改ざんを検知する",
        "公衆回線上でも安全な通信を実現する"
      ]
    },
    {
      type: "title",
      value: "認証の目的"
    },
    {
      type: "list",
      items: [
        "通信相手が正当な相手であることを確認する",
        "なりすましを防止する",
        "VPN接続を許可する利用者や拠点を制限する"
      ]
    },
    {
      type: "title",
      value: "VPNの暗号化範囲"
    },
    {
      type: "list",
      items: [
        "VPN装置間の通信区間が暗号化される",
        "インターネット上を流れるデータは暗号化される",
        "VPN装置より内側のLAN通信は暗号化対象外の場合がある",
        "トンネル内のデータは第三者から閲覧できない"
      ]
    },
    {
      type: "title",
      value: "VPNの認証範囲"
    },
    {
      type: "list",
      items: [
        "VPN装置同士の相互認証を行う",
        "リモートアクセスVPNでは利用者認証を行う",
        "証明書や事前共有鍵（PSK）が利用される",
        "認証成功後に暗号化通信が開始される"
      ]
    },
    {
      type: "title",
      value: "IPsec VPNの場合"
    },
    {
      type: "list",
      items: [
        "IKEで相手機器を認証する",
        "IPパケットを暗号化してトンネルを構築する",
        "機密性・完全性・認証を提供する"
      ]
    },
    {
      type: "title",
      value: "試験ポイント"
    },
    {
      type: "list",
      items: [
        "暗号化と認証は目的が異なる",
        "暗号化は盗聴対策、認証はなりすまし対策",
        "IPsecではIKEが認証を担当する",
        "認証後に暗号化通信が開始される",
        "VPNの暗号化範囲はトンネル区間である"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default vpnEncryptionAuthenticationContent;