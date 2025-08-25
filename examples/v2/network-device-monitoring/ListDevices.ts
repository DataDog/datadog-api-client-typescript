/**
 * Get the list of devices returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.NetworkDeviceMonitoringApi(configuration);

const params: v2.NetworkDeviceMonitoringApiListDevicesRequest = {
  pageSize: 1,
  pageNumber: 0,
  filterTag: "device_namespace:default",
};

apiInstance
  .listDevices(params)
  .then((data: v2.ListDevicesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
