/**
 * Test a notification rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiSendSecurityMonitoringNotificationPreviewRequest =
  {
    body: {
      data: {
        attributes: {
          enabled: true,
          name: "Rule 1",
          selectors: {
            query: "env:prod",
            ruleTypes: ["log_detection"],
            severities: ["critical"],
            triggerSource: "security_signals",
          },
          targets: ["@john.doe@email.com"],
        },
        type: "notification_rules",
      },
    },
  };

apiInstance
  .sendSecurityMonitoringNotificationPreview(params)
  .then((data: v2.NotificationRulePreviewResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
