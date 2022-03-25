/**
 * Update items of a dashboard list returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.DashboardListsApi(configuration);

const params: v2.DashboardListsApiUpdateDashboardListItemsRequest = {
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
  .updateDashboardListItems(params)
  .then((data: v2.DashboardListUpdateItemsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
