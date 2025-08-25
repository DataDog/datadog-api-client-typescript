/**
 * Delete a monitor returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

// there is a valid "monitor" in the system
const MONITOR_ID = parseInt(process.env.MONITOR_ID as string);

const params: v1.MonitorsApiDeleteMonitorRequest = {
  monitorId: MONITOR_ID,
};

apiInstance
  .deleteMonitor(params)
  .then((data: v1.DeletedMonitor) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
