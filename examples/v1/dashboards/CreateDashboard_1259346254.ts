/**
 * Create a new dashboard with timeseries widget using order_by values
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    layoutType: "ordered",
    title: "Example-Dashboard with order_by values",
    widgets: [
      {
        definition: {
          type: "timeseries",
          requests: [
            {
              q: "avg:system.cpu.user{*} by {host}",
              style: {
                palette: "warm",
                orderBy: "values",
              },
              displayType: "line",
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
