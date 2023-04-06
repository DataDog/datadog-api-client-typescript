/**
 * Create a dashboard list returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardListsApi(configuration);

const params: v1.DashboardListsApiCreateDashboardListRequest = {
  body: {
    name: "Example-Dashboard-List",
  },
};

apiInstance
  .createDashboardList(params)
  .then((data: v1.DashboardList) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
