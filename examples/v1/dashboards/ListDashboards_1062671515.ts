/**
 * Get all dashboards returns "OK" response with pagination
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiListDashboardsRequest = {
  count: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listDashboardsWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
