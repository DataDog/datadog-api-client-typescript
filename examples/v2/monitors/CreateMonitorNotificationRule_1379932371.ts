/**
 * Create a monitor notification rule with scope returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MonitorsApi(configuration);

const params: v2.MonitorsApiCreateMonitorNotificationRuleRequest = {
  body: {
    data: {
      attributes: {
        filter: {
          scope: "test:example-monitor",
        },
        name: "test rule",
        recipients: ["slack-test-channel", "jira-test"],
      },
      type: "monitor-notification-rule",
    },
  },
};

apiInstance
  .createMonitorNotificationRule(params)
  .then((data: v2.MonitorNotificationRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
