/**
 * Get active downtimes for a monitor returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DowntimesApi(configuration);

const params: v2.DowntimesApiListMonitorDowntimesRequest = {
  monitorId: 9223372036854775807,
};

(async () => {
  try {
    for await (const item of apiInstance.listMonitorDowntimesWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
