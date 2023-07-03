/**
 * Get active downtimes for a monitor returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listMonitorDowntimes"] = true;
const apiInstance = new v2.DowntimesApi(configuration);

const params: v2.DowntimesApiListMonitorDowntimesRequest = {
  monitorId: 9223372036854775807,
};

apiInstance
  .listMonitorDowntimes(params)
  .then((data: v2.MonitorDowntimeMatchResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
