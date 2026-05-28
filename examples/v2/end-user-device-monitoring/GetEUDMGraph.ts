/**
 * Get device counts grouped by attribute returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.EndUserDeviceMonitoringApi(configuration);

const params: v2.EndUserDeviceMonitoringApiGetEUDMGraphRequest = {
  by: "by",
};

apiInstance
  .getEUDMGraph(params)
  .then((data: v2.GraphItemArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
