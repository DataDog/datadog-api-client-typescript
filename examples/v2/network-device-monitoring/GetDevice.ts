/**
 * Get the device details returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.NetworkDeviceMonitoringApi(configuration);

const params: v2.NetworkDeviceMonitoringApiGetDeviceRequest = {
  deviceId: "default_device",
};

apiInstance
  .getDevice(params)
  .then((data: v2.GetDeviceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
