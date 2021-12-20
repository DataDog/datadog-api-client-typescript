/**
 * Schedule a monitor downtime returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

// there is a valid "monitor" in the system
let MONITOR_ID = parseInt(process.env.MONITOR_ID as string);

let params: v1.DowntimesApiCreateDowntimeRequest = {
  body: {
    message: "Example-Schedule_a_monitor_downtime_returns_OK_response",
    start: new Date().getTime(),
    timezone: "Etc/UTC",
    scope: ["test:examplescheduleamonitordowntimereturnsokresponse"],
    monitorId: MONITOR_ID,
  },
};

apiInstance
  .createDowntime(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
