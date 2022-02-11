/**
 * Update a dashboard list returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardListsApi(configuration);

// there is a valid "dashboard_list" in the system
let DASHBOARD_LIST_ID = parseInt(process.env.DASHBOARD_LIST_ID as string);

let params: v1.DashboardListsApiUpdateDashboardListRequest = {
  body: {
    name: "updated Example-Update_a_dashboard_list_returns_OK_response",
  },
  listId: DASHBOARD_LIST_ID,
};

apiInstance
  .updateDashboardList(params)
  .then((data: v1.DashboardList) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
