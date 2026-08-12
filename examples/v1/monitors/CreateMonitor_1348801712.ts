/**
 * Create an LLM Observability monitor returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

const params: v1.MonitorsApiCreateMonitorRequest = {
  body: {
    name: "Example-Monitor",
    type: "llm-observability alert",
    query: `llm-observability("*").rollup("count").last("2h") > 0`,
    message: "LLM observability alert triggered",
    tags: ["test:examplemonitor", "env:ci"],
    options: {
      thresholds: {
        critical: 0,
      },
      includeTags: true,
      notifyAudit: false,
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
