/**
 * Update a dashboard returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

// there is a valid "dashboard" in the system
const DASHBOARD_ID = process.env.DASHBOARD_ID as string;

const params: v1.DashboardsApiUpdateDashboardRequest = {
  body: {
    layoutType: "ordered",
    title: "Example-Dashboard with list_stream widget",
    description: "Updated description",
    widgets: [
      {
        definition: {
          type: "list_stream",
          requests: [
            {
              columns: [
                {
                  width: "auto",
                  field: "timestamp",
                },
              ],
              query: {
                dataSource: "apm_issue_stream",
                queryString: "",
              },
              responseFormat: "event_list",
            },
          ],
        },
      },
    ],
  },
  dashboardId: DASHBOARD_ID,
};

apiInstance
  .updateDashboard(params)
  .then((data: v1.Dashboard) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
