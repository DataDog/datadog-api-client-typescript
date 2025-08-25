/**
 * Get items of a Dashboard List returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DashboardListsApi(configuration);

// there is a valid "dashboard_list" in the system
const DASHBOARD_LIST_ID = parseInt(process.env.DASHBOARD_LIST_ID as string);

const params: v2.DashboardListsApiGetDashboardListItemsRequest = {
  dashboardListId: DASHBOARD_LIST_ID,
};

apiInstance
  .getDashboardListItems(params)
  .then((data: v2.DashboardListItems) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
