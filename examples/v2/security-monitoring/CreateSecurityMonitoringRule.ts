/**
 * Create a detection rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSecurityMonitoringRuleRequest = {
  body: {
    name: "Example-Security-Monitoring",
    queries: [
      {
        query: "@test:true",
        aggregation: "count",
        groupByFields: [],
        distinctFields: [],
        metric: "",
      },
    ],
    filters: [],
    cases: [
      {
        name: "",
        status: "info",
        condition: "a > 0",
        notifications: [],
      },
    ],
    options: {
      evaluationWindow: 900,
      keepAlive: 3600,
      maxSignalDuration: 86400,
    },
    message: "Test rule",
    tags: [],
    isEnabled: true,
    type: "log_detection",
    referenceTables: [
      {
        tableName: "synthetics_test_reference_table_dont_delete",
        columnName: "value",
        logFieldPath: "testtag",
        checkPresence: true,
        ruleQueryName: "a",
      },
    ],
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
