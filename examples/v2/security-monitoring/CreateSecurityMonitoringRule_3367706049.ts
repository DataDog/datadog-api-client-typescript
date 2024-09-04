/**
 * Create a detection rule with detection method 'third_party' returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSecurityMonitoringRuleRequest = {
  body: {
    name: "Example-Security-Monitoring",
    type: "log_detection",
    isEnabled: true,
    thirdPartyCases: [
      {
        query: "status:error",
        name: "high",
        status: "high",
      },
      {
        query: "status:info",
        name: "low",
        status: "low",
      },
    ],
    queries: [],
    cases: [],
    message: "This is a third party rule",
    options: {
      detectionMethod: "third_party",
      keepAlive: 0,
      maxSignalDuration: 600,
      thirdPartyRuleOptions: {
        defaultStatus: "info",
        rootQueries: [
          {
            query: "source:guardduty @details.alertType:*EC2*",
            groupByFields: ["instance-id"],
          },
          {
            query: "source:guardduty",
            groupByFields: [],
          },
        ],
      },
    },
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
