/**
 * Create a monitor notification rule with conditional recipients returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MonitorsApi(configuration);

const params: v2.MonitorsApiCreateMonitorNotificationRuleRequest = {
  body: {
    data: {
      attributes: {
        filter: {
          tags: ["test:example-monitor"],
        },
        name: "test rule",
        conditionalRecipients: {
          conditions: [
            {
              scope: "transition_type:is_alert",
              recipients: ["slack-test-channel", "jira-test"],
            },
          ],
        },
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
