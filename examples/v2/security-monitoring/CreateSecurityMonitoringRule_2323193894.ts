/**
 * Create a detection rule with detection method 'anomaly_detection' returns "OK" response
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
        groupByFields: ["@usr.email", "@network.client.ip"],
        hasOptionalGroupByFields: false,
        name: "",
        query: "service:app status:error",
      },
    ],
    cases: [
      {
        name: "",
        status: "info",
        notifications: [],
        condition: "a > 0.995",
      },
    ],
    message: "An anomaly detection rule",
    options: {
      detectionMethod: "anomaly_detection",
      evaluationWindow: 900,
      keepAlive: 3600,
      maxSignalDuration: 86400,
      anomalyDetectionOptions: {
        bucketDuration: 300,
        learningDuration: 24,
        detectionTolerance: 3,
        learningPeriodBaseline: 10,
      },
    },
    tags: [],
    filters: [],
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
