import pki from "./items/pki";
import digitalCertificateValidationContent from "./items/digitalCertificateValidationContent";
import crlOcsp from "./items/crl_ocsp";
import tcpUdp from "./items/tcpUdp"; 
import fw from "./items/fw";
import afw from "./items/waf";
import idsContent from "./items/idsContent";
import ipsContent from "./items/ipsContent";
import detectionMethodContent from "./items/detectionMethodContent";
import forwardReverseProxyContent from "./items/forwardReverseProxyContent";
import vpnBasic from "./items/vpnBasic";
import vpnEncryptionAuthenticationContent from "./items/vpnEncryptionAuthenticationContent";
import ike from "./items/ike";
import ipsec from "./items/ipsec";
import wlanBasic from "./items/wlanBasic";
import ieee8021x from "./items/ieee8021x";
import wlanSecurityStandards from "./items/wlanSecurityStandards";
import wlanAuthMode from "./items/wlanAuthMode";
import hiddenTerminalProblemContent from "./items/hiddenTerminalProblemContent";
import macFilteringSsidStealthContent from "./items/macFilteringSsidStealthContent";
import dnsServerContent from "./items/dnsServerContent";
import dnsCachePoisoningContent from "./items/dnsCachePoisoningContent";
import dnssecContent from "./items/dnssecContent";

export const scContent = {
  "PKIの仕組み": pki,
  "デジタル証明書の検証": digitalCertificateValidationContent,
  "CRLとOCSP": crlOcsp,
  "TCPとUDP": tcpUdp,
  "FW（ファイアウォール）": fw,
  "WAF": afw,
  "IDS": idsContent,
  "IPS": ipsContent,
  "検知方式と誤検知": detectionMethodContent,
  "フォワードプロキシとリバースプロキシ": forwardReverseProxyContent,
  "VPNの基本": vpnBasic,
  "VPNの暗号化範囲と認証範囲": vpnEncryptionAuthenticationContent,
  "Ipsec": ipsec,
  "IKE": ike,
  "無線LANの基本": wlanBasic,
  "IEEE802.1X認証": ieee8021x,
  "無線LANのセキュリティ企画": wlanSecurityStandards,
  "パーソナルモードとエンタープライズモード": wlanAuthMode,
  "隠れ端末問題": hiddenTerminalProblemContent,
  "MACアドレスフィルタリングとSSIDステルス機能": macFilteringSsidStealthContent,
  "DNSサーバ": dnsServerContent,
  "DNSキャッシュポイズニング": dnsCachePoisoningContent,
  "DNSSEC": dnssecContent,
};
