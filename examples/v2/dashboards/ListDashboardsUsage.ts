/**
 * Get usage stats for all dashboards returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listDashboardsUsage"] = true;
const apiInstance = new v2.DashboardsApi(configuration);

apiInstance
  .listDashboardsUsage()
  .then((data: v2.ListDashboardsUsageResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
