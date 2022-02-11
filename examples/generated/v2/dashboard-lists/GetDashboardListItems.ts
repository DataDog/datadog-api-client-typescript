import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.DashboardListsApi(configuration);

let params: v2.DashboardListsApiGetDashboardListItemsRequest = {
  // number | ID of the dashboard list to get items from.
  dashboardListId: 1,
};

apiInstance
  .getDashboardListItems(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
