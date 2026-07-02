import img from "../../../assets/sc_img/tcpUdp.png";

const tcpUdp = {
  title: "TCPとUDP",
  body: [
    {
      type: "title",
      value: "TCPとUDPの基本"
    },
    {
      type: "text",
      value: "TCPとUDPはトランスポート層の通信プロトコルであり、アプリケーション間のデータ転送方法を定義する。TCPは信頼性重視、UDPは速度重視である。"
    },
    {
      type: "list",
      items: [
        "TCP：信頼性重視の通信",
        "UDP：高速・軽量な通信"
      ]
    },
    {
      type: "title",
      value: "TCPの特徴"
    },
    {
      type: "list",
      items: [
        "コネクション型通信（接続確立あり）",
        "通信の順序保証",
        "再送制御あり（パケット損失時）",
        "フロー制御・輻輳制御あり",
        "信頼性は高いが遅い"
      ]
    },
    {
      type: "title",
      value: "UDPの特徴"
    },
    {
      type: "list",
      items: [
        "コネクションレス通信（接続不要）",
        "順序保証なし",
        "再送制御なし",
        "制御が少なく高速",
        "リアルタイム通信に適している"
      ]
    },
    {
      type: "title",
      value: "利用例"
    },
    {
      type: "list",
      items: [
        "TCP：HTTP, HTTPS, FTP, SMTP",
        "UDP：DNS, DHCP, VoIP, 動画配信"
      ]
    },
    {
      type: "title",
      value: "TCPの接続確立（3ウェイハンドシェイク）"
    },
    {
      type: "list",
      items: [
        "1. SYN（接続要求）",
        "2. SYN+ACK（確認応答）",
        "3. ACK（接続確立）"
      ]
    },
    {
      type: "image",
      value: img
    },
    {
      type: "title",
      value: "試験ポイント"
    },
    {
      type: "list",
      items: [
        "TCPは信頼性（再送・順序制御）を提供する",
        "UDPは高速だが信頼性は保証しない",
        "リアルタイム通信はUDPが適している",
        "3ウェイハンドシェイクの流れは頻出"
      ]
    }
  ]
};

export default tcpUdp;