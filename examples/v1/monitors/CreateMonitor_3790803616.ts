/**
 * Create a ci-pipelines monitor returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

const params: v1.MonitorsApiCreateMonitorRequest = {
  body: {
    name: "Example-Monitor",
    type: "ci-pipelines alert",
    query: `ci-pipelines("ci_level:pipeline @git.branch:staging* @ci.status:error").rollup("count").by("@git.branch,@ci.pipeline.name").last("5m") >= 1`,
    message: "some message Notify: @hipchat-channel",
    tags: ["test:examplemonitor", "env:ci"],
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
