/**
 * Create a new dashboard with list_stream widget with a valid sort parameter ASC
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    layoutType: "ordered",
    title: "Example-Dashboard with list_stream widget",
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
                dataSource: "event_stream",
                queryString: "",
                eventSize: "l",
                sort: {
                  column: "timestamp",
                  order: "asc",
                },
              },
              responseFormat: "event_list",
            },
          ],
        },
      },
    ],
  },
};

apiInstance
  .createDashboard(params)
  .then((data: v1.Dashboard) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
