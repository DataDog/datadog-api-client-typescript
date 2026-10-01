/**
 * Create a new dashboard with case_stream list_stream widget
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    layoutType: "ordered",
    title: "Example-Dashboard with case_stream list_stream widget",
    widgets: [
      {
        definition: {
          type: "list_stream",
          requests: [
            {
              columns: [
                {
                  width: "auto",
                  field: "created_at",
                },
              ],
              query: {
                dataSource: "case_stream",
                queryString: "*",
                sort: {
                  column: "created_at",
                  order: "desc",
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
