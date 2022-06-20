/**
 * Update an existing rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiUpdateSecurityMonitoringRuleRequest = {
  body: {
    cases: [
      {
        notifications: [],
        status: "critical",
      },
    ],
    filters: [
      {
        action: "require",
      },
    ],
    hasExtendedTitle: true,
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
        learningMethod: "duration",
        learningThreshold: 0,
      },
    },
    queries: [
      {
        aggregation: "count",
        distinctFields: [],
        groupByFields: [],
      },
    ],
    tags: [],
    version: 1,
  },
  ruleId: "rule_id",
};

apiInstance
  .updateSecurityMonitoringRule(params)
  .then((data: v2.SecurityMonitoringRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
