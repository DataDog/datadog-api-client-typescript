/**
 * Edit a monitor returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

// there is a valid "monitor" in the system
let MONITOR_ID = parseInt(process.env.MONITOR_ID as string);

let params: v1.MonitorsApiUpdateMonitorRequest = {
  body: {
    name: "My monitor-updated",
    options: {
      evaluationDelay: undefined,
      newGroupDelay: 600,
      newHostDelay: undefined,
      renotifyInterval: undefined,
      thresholds: {
        critical: 2,
        warning: undefined,
      },
      timeoutH: undefined,
    },
  },
  monitorId: MONITOR_ID,
};

apiInstance
  .updateMonitor(params)
  .then((data: v1.Monitor) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
