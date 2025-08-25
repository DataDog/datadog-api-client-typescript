/**
 * Validate a detection rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiValidateSecurityMonitoringRuleRequest = {
  body: {
    cases: [
      {
        name: "",
        status: "info",
        notifications: [],
        condition: "a > 0",
      },
    ],
    hasExtendedTitle: true,
    isEnabled: true,
    message: "My security monitoring rule",
    name: "My security monitoring rule",
    options: {
      evaluationWindow: 1800,
      keepAlive: 1800,
      maxSignalDuration: 1800,
      detectionMethod: "threshold",
    },
    queries: [
      {
        query: "source:source_here",
        groupByFields: ["@userIdentity.assumed_role"],
        distinctFields: [],
        aggregation: "count",
        name: "",
      },
    ],
    tags: ["env:prod", "team:security"],
    type: "log_detection",
  },
};

apiInstance
  .validateSecurityMonitoringRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
