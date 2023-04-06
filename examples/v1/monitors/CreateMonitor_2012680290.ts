/**
 * Create a metric monitor returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

const params: v1.MonitorsApiCreateMonitorRequest = {
  body: {
    name: "Example-Monitor",
    type: "metric alert",
    query: "avg(current_1mo):avg:system.load.5{*} > 0.5",
    message: "some message Notify: @hipchat-channel",
    options: {
      thresholds: {
        critical: 0.5,
      },
      schedulingOptions: {
        evaluationWindow: {
          dayStarts: "04:00",
          monthStarts: 1,
        },
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
