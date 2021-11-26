/**
 * Delete a dashboard list returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardListsApi(configuration);

// there is a valid "dashboard_list" in the system
let DASHBOARD_LIST_ID = parseInt(process.env.DASHBOARD_LIST_ID as string);

let params: v1.DashboardListsApiDeleteDashboardListRequest = {
  listId: DASHBOARD_LIST_ID,
};

apiInstance
  .deleteDashboardList(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
