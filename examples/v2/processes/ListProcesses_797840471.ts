/**
 * Get all processes returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ProcessesApi(configuration);

const params: v2.ProcessesApiListProcessesRequest = {
  pageLimit: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listProcessesWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
