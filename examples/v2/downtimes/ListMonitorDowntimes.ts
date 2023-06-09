/**
 * Get all downtimes for a monitor returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DowntimesApi(configuration);

// there is a valid "monitor" in the system
const MONITOR_ID = parseInt(process.env.MONITOR_ID as string);

const params: v2.DowntimesApiListMonitorDowntimesRequest = {
  monitorId: MONITOR_ID,
};

apiInstance
  .listMonitorDowntimes(params)
  .then((data: v2.MonitorDowntimeMatchResponse[]) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
