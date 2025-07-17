/**
 * Create a detection rule with type 'application_security 'returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSecurityMonitoringRuleRequest = {
  body: {
    type: "application_security",
    name: "Example-Security-Monitoring_appsec_rule",
    queries: [
      {
        query: "@appsec.security_activity:business_logic.users.login.failure",
        aggregation: "count",
        groupByFields: ["service", "@http.client_ip"],
        distinctFields: [],
      },
    ],
    filters: [],
    cases: [
      {
        name: "",
        status: "info",
        notifications: [],
        condition: "a > 100000",
        actions: [
          {
            type: "block_ip",
            options: {
              duration: 900,
            },
          },
          {
            type: "user_behavior",
            options: {
              userBehaviorName: "behavior",
            },
          },
          {
            type: "flag_ip",
            options: {
              flaggedIpType: "FLAGGED",
            },
          },
        ],
      },
    ],
    options: {
      keepAlive: 3600,
      maxSignalDuration: 86400,
      evaluationWindow: 900,
      detectionMethod: "threshold",
    },
    isEnabled: true,
    message: "Test rule",
    tags: [],
    groupSignalsBy: ["service"],
  },
};

apiInstance
  .createSecurityMonitoringRule(params)
  .then((data: v2.SecurityMonitoringRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
