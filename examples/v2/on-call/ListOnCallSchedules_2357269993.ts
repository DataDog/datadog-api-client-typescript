/**
 * List On-Call schedules returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallApi(configuration);

(async () => {
  try {
    for await (const item of apiInstance.listOnCallSchedulesWithPagination()) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
