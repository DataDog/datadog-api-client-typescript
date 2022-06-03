/**
 * Create a detection rule returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityPlatformApi(configuration);

const params: v2.SecurityPlatformApiCreateSecurityMonitoringRuleRequest = {
  body: {
    cases: [],
    filters: [
      {
        action: "require",
      },
    ],
    hasExtendedTitle: true,
    isEnabled: true,
    message: "",
    name: "My security monitoring rule.",
    options: {
      detectionMethod: "threshold",
      evaluationWindow: 0,
      hardcodedEvaluatorType: "log4shell",
      impossibleTravelOptions: {
        baselineUserLocations: true,
      },
      keepAlive: 0,
      maxSignalDuration: 0,
      newValueOptions: {
        forgetAfter: 1,
        learningDuration: 0,
      },
    },
    queries: [],
    tags: ["env:prod", "team:security"],
    type: "log_detection",
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
