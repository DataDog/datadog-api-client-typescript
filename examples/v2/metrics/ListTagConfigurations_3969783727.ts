/**
 * Get a list of metrics returns "Success" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

const params: v2.MetricsApiListTagConfigurationsRequest = {
  pageSize: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listTagConfigurationsWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
