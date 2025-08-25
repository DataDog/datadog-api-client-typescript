/**
 * Get the list of interfaces of the device returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.NetworkDeviceMonitoringApi(configuration);

const params: v2.NetworkDeviceMonitoringApiGetInterfacesRequest = {
  deviceId: "default:1.2.3.4",
  getIpAddresses: true,
};

apiInstance
  .getInterfaces(params)
  .then((data: v2.GetInterfacesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
