/**
 * Get usage stats for all dashboards returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listDashboardsUsage"] = true;
const apiInstance = new v2.DashboardsApi(configuration);

const params: v2.DashboardsApiListDashboardsUsageRequest = {
  pageLimit: 500,
};

(async () => {
  try {
    for await (const item of apiInstance.listDashboardsUsageWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
