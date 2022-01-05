/**
 * Create a ci-pipelines monitor returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

let params: v1.MonitorsApiCreateMonitorRequest = {
  body: {
name: "Example-Create_a_ci_pipelines_monitor_returns_OK_response",
type: "ci-pipelines alert",
query: `ci-pipelines("ci_level:pipeline @git.branch:staging* @ci.status:error").rollup("count").by("@git.branch,@ci.pipeline.name").last("5m") >= 1`,
message: "some message Notify: @hipchat-channel",
tags: [
"test:examplecreateacipipelinesmonitorreturnsokresponse",
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
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
  })
  .catch((error: any) => console.error(error));