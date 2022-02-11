import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardListsApi(configuration);

let params: v1.DashboardListsApiUpdateDashboardListRequest = {
  // number | ID of the dashboard list to update.
  listId: 1,
  // DashboardList | Update a dashboard list request body.
  body: {
    name: "My Dashboard",
  },
};

apiInstance
  .updateDashboardList(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
