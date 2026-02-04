/**
 * Search dashboards returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.searchDashboards"] = true;
const apiInstance = new v2.DashboardsApi(configuration);

apiInstance
  .searchDashboards()
  .then((data: v2.DashboardSearchResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
