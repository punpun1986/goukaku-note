import img from "../../assets/sc_img/logManagementContent.png";

const logManagementContent = {
  title: "ログ管理",
  body: [
    {
      type: "title",
      value: "ログ管理とは"
    },
    {
      type: "text",
      value: "ログ管理とは、システムやネットワーク機器が記録するログを収集・保管・分析し、障害調査や不正アクセスの検知、監査証跡の確保を行うことである。"
    },
    {
      type: "title",
      value: "ログの役割"
    },
    {
      type: "list",
      items: [
        "不正アクセスやインシデントの調査",
        "システム障害の原因分析",
        "利用状況の把握",
        "監査証跡の確保"
      ]
    },
    {
      type: "title",
      value: "主なログの種類"
    },
    {
      type: "list",
      items: [
        "アクセスログ：利用者のアクセス履歴を記録",
        "認証ログ：ログイン・ログアウトの記録",
        "システムログ：OSやサービスの動作記録",
        "アプリケーションログ：アプリケーションの処理記録",
        "通信ログ：ネットワーク通信の記録"
      ]
    },
    {
      type: "title",
      value: "ログ管理の流れ"
    },
    {
      type: "list",
      items: [
        "各機器・サーバからログを収集する",
        "ログサーバへ集約する",
        "適切に保管する",
        "異常や攻撃の兆候を分析する",
        "インシデント発生時に調査へ活用する"
      ]
    },
    {
      type: "title",
      value: "ログ管理の注意点"
    },
    {
      type: "list",
      items: [
        "時刻同期（NTP）を行う",
        "ログの改ざん防止を実施する",
        "ログ保存期間を定める",
        "個人情報を適切に管理する"
      ]
    },
    {
      type: "title",
      value: "SIEM"
    },
    {
      type: "list",
      items: [
        "複数機器のログを統合管理する",
        "相関分析によって攻撃を検知する",
        "Security Information and Event Managementの略",
        "SOC運用で活用される"
      ]
    },
    {
      type: "title",
      value: "試験ポイント"
    },
    {
      type: "list",
      items: [
        "ログは監査証跡として利用される",
        "時刻同期（NTP）は重要な運用要件",
        "ログの改ざん防止が重要である",
        "SIEMはログの統合管理と相関分析を行う",
        "インシデント対応ではログ分析が重要となる"
      ]
    },
    {
      type: "image",
      value: img
    }
  ]
};

export default logManagementContent;