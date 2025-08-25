/**
 * Get all dashboards returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiListDashboardsRequest = {
  filterShared: false,
};

apiInstance
  .listDashboards(params)
  .then((data: v1.DashboardSummary) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
