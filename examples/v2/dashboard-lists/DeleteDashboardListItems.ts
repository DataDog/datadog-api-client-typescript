/**
 * Delete items from a dashboard list returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DashboardListsApi(configuration);

const params: v2.DashboardListsApiDeleteDashboardListItemsRequest = {
  body: {
    dashboards: [
      {
        id: "q5j-nti-fv6",
        type: "host_timeboard",
      },
    ],
  },
  dashboardListId: 9223372036854775807,
};

apiInstance
  .deleteDashboardListItems(params)
  .then((data: v2.DashboardListDeleteItemsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
