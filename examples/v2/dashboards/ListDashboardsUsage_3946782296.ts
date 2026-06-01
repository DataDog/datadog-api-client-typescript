/**
 * Get usage stats for all dashboards with viewed_before filter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listDashboardsUsage"] = true;
const apiInstance = new v2.DashboardsApi(configuration);

const params: v2.DashboardsApiListDashboardsUsageRequest = {
  filterViewedBefore: "2025-04-26T00:00:00Z",
};

apiInstance
  .listDashboardsUsage(params)
  .then((data: v2.ListDashboardsUsageResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
