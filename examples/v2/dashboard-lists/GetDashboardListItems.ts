/**
 * Get items of a Dashboard List returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.DashboardListsApi(configuration);

const params: v2.DashboardListsApiGetDashboardListItemsRequest = {
  dashboardListId: 9223372036854775807,
};

apiInstance
  .getDashboardListItems(params)
  .then((data: v2.DashboardListItems) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
