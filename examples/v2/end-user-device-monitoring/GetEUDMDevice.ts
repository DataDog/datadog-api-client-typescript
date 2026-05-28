/**
 * Get a device returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.EndUserDeviceMonitoringApi(configuration);

const params: v2.EndUserDeviceMonitoringApiGetEUDMDeviceRequest = {
  deviceId: "device_id",
};

apiInstance
  .getEUDMDevice(params)
  .then((data: v2.DeviceDetails) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
