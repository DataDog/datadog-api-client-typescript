/**
 * Get all devices returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.EndUserDeviceMonitoringApi(configuration);

apiInstance
  .getEUDMDevices()
  .then((data: v2.DeviceBaseArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
