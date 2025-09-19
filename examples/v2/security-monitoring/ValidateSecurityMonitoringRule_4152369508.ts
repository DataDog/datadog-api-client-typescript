/**
 * Validate a detection rule with detection method 'sequence_detection' returns "OK" response
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
        condition: "step_b > 0",
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
      detectionMethod: "sequence_detection",
      sequenceDetectionOptions: {
        stepTransitions: [
          {
            child: "step_b",
            evaluationWindow: 900,
            parent: "step_a",
          },
        ],
        steps: [
          {
            condition: "a > 0",
            evaluationWindow: 60,
            name: "step_a",
          },
          {
            condition: "b > 0",
            evaluationWindow: 60,
            name: "step_b",
          },
        ],
      },
    },
    queries: [
      {
        query: "source:source_here",
        groupByFields: ["@userIdentity.assumed_role"],
        distinctFields: [],
        aggregation: "count",
        name: "",
      },
      {
        query: "source:source_here2",
        groupByFields: [],
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
