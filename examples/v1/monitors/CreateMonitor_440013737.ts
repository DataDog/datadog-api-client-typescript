/**
 * Create an Error Tracking monitor returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

const params: v1.MonitorsApiCreateMonitorRequest = {
  body: {
    name: "Example-Create_an_Error_Tracking_monitor_returns_OK_response",
    type: "error-tracking alert",
    query: `error-tracking-rum("service:foo AND @error.source:source").rollup("count").by("@issue.id").last("1h") >= 1`,
    message: "some message",
    tags: [
      "test:examplecreateanerrortrackingmonitorreturnsokresponse",
      "env:ci",
    ],
    priority: 3,
    options: {
      thresholds: {
        critical: 1,
      },
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
