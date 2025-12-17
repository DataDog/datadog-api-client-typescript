/**
 * Validate a detection rule with detection method 'new_value' with enabled feature 'instantaneousBaseline' returns "OK"
 * response
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
      },
    ],
    hasExtendedTitle: true,
    isEnabled: true,
    message: "My security monitoring rule",
    name: "My security monitoring rule",
    options: {
      evaluationWindow: 0,
      keepAlive: 300,
      maxSignalDuration: 600,
      detectionMethod: "new_value",
      newValueOptions: {
        forgetAfter: 7,
        instantaneousBaseline: true,
        learningDuration: 1,
        learningThreshold: 0,
        learningMethod: "duration",
      },
    },
    queries: [
      {
        query: "source:source_here",
        groupByFields: ["@userIdentity.assumed_role"],
        distinctFields: [],
        metric: "name",
        metrics: ["name"],
        aggregation: "new_value",
        name: "",
        dataSource: "logs",
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
