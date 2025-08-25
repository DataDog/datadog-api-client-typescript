/**
 * Get a list of logs returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.LogsApi(configuration);

const params: v2.LogsApiListLogsGetRequest = {
  pageLimit: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listLogsGetWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
