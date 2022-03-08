/**
 * Restore deleted dashboards returns "No Content" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

// there is a valid "dashboard" in the system
let DASHBOARD_ID = process.env.DASHBOARD_ID as string;

let params: v1.DashboardsApiRestoreDashboardsRequest = {
  body: {
    data: [
      {
        id: DASHBOARD_ID,
        type: "dashboard",
      },
    ],
  },
};

apiInstance
  .restoreDashboards(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
