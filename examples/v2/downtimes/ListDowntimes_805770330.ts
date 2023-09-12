/**
 * Get all downtimes returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DowntimesApi(configuration);

const params: v2.DowntimesApiListDowntimesRequest = {
  pageLimit: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listDowntimesWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
