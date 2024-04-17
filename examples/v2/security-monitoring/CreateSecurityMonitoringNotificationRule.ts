/**
 * Create a notification rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSecurityMonitoringNotificationRuleRequest =
  {
    body: {
      data: {
        attributes: {
          enabled: true,
          name: "Example-Security-Monitoring",
          selectors: {
            attributes: ["test:123", "env:prod"],
            implicitVmRuleMatch: false,
            ruleTags: ["test:123"],
            ruleTypes: ["application_security", "log_detection"],
            severities: ["high"],
            signalTags: ["env:prod"],
          },
          targets: ["@slack-test"],
        },
        type: "notification_rules",
      },
    },
  };

apiInstance
  .createSecurityMonitoringNotificationRule(params)
  .then((data: v2.SecurityMonitoringNotificationRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
