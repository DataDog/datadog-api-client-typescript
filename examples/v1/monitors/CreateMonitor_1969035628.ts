/**
 * Create a ci-tests formula and functions monitor returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

const params: v1.MonitorsApiCreateMonitorRequest = {
  body: {
    name: "Example-Create_a_ci_tests_formula_and_functions_monitor_returns_OK_response",
    type: "ci-tests alert",
    query: `formula("query1 / query2 * 100").last("15m") >= 0.8`,
    message: "some message Notify: @hipchat-channel",
    tags: [
      "test:examplecreateacitestsformulaandfunctionsmonitorreturnsokresponse",
      "env:ci",
    ],
    priority: 3,
    options: {
      thresholds: {
        critical: 0.8,
      },
      variables: [
        {
          dataSource: "ci_tests",
          name: "query1",
          search: {
            query: "@test.status:fail",
          },
          indexes: ["*"],
          compute: {
            aggregation: "count",
          },
          groupBy: [],
        },
        {
          dataSource: "ci_tests",
          name: "query2",
          search: {
            query: "",
          },
          indexes: ["*"],
          compute: {
            aggregation: "count",
          },
          groupBy: [],
        },
      ],
    },
  },
};

apiInstance
  .createMonitor(params)
  .then((data: v1.Monitor) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
