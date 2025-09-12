/**
 * Create a detection rule with detection method 'sequence_detection' returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSecurityMonitoringRuleRequest = {
  body: {
    name: "Example-Security-Monitoring",
    type: "log_detection",
    isEnabled: true,
    queries: [
      {
        aggregation: "count",
        dataSource: "logs",
        distinctFields: [],
        groupByFields: [],
        hasOptionalGroupByFields: false,
        name: "",
        query: "service:logs-rule-reducer source:paul test2",
      },
      {
        aggregation: "count",
        dataSource: "logs",
        distinctFields: [],
        groupByFields: [],
        hasOptionalGroupByFields: false,
        name: "",
        query: "service:logs-rule-reducer source:paul test1",
      },
    ],
    cases: [
      {
        name: "",
        status: "info",
        notifications: [],
        condition: "step_b > 0",
      },
    ],
    message: "Logs and signals asdf",
    options: {
      detectionMethod: "sequence_detection",
      evaluationWindow: 0,
      keepAlive: 300,
      maxSignalDuration: 600,
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
    tags: [],
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
