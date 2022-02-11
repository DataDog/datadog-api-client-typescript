/**
 * Create a monitor returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

// there is a valid "role" in the system
let ROLE_DATA_ID = process.env.ROLE_DATA_ID as string;

let params: v1.MonitorsApiCreateMonitorRequest = {
  body: {
    name: "Example-Create_a_monitor_returns_OK_response",
    type: "log alert",
    query: `logs("service:foo AND type:error").index("main").rollup("count").by("source").last("5m") > 2`,
    message: "some message Notify: @hipchat-channel",
    tags: ["test:examplecreateamonitorreturnsokresponse", "env:ci"],
    priority: 3,
    restrictedRoles: [ROLE_DATA_ID],
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
