/**
 * Create a new dashboard with point_plot widget
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard",
    layoutType: "ordered",
    widgets: [
      {
        definition: {
          title: "",
          titleSize: "16",
          titleAlign: "left",
          type: "point_plot",
          requests: [
            {
              requestType: "data_projection",
              query: {
                queryString: "service:web-store",
                dataSource: "logs",
              },
              projection: {
                type: "point_plot",
                dimensions: [
                  {
                    column: "host",
                    dimension: "group",
                  },
                  {
                    column: "@duration",
                    dimension: "y",
                  },
                ],
              },
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
