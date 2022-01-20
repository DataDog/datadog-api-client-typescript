/**
 * Create a dashboard list returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardListsApi(configuration);

let params: v1.DashboardListsApiCreateDashboardListRequest = {
  body: {
    name: "Test-Example-Create_a_dashboard_list_returns_OK_response",
  },
};

apiInstance
  .createDashboardList(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
