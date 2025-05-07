/**
 * Get the list of devices returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.NetworkDeviceMonitoringApi(configuration);

(async () => {
  try {
    for await (const item of apiInstance.listDevicesWithPagination()) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
