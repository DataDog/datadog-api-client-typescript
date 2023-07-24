/**
 * Create a new dashboard with a timeseries widget and an overlay request
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    layoutType: "ordered",
    title: "Example-Dashboard",
    widgets: [
      {
        definition: {
          type: "timeseries",
          requests: [
            {
              onRightYaxis: false,
              queries: [
                {
                  dataSource: "metrics",
                  name: "mymetric",
                  query: "avg:system.cpu.user{*}",
                },
              ],
              responseFormat: "timeseries",
              displayType: "line",
            },
            {
              responseFormat: "timeseries",
              queries: [
                {
                  dataSource: "metrics",
                  name: "mymetricoverlay",
                  query: "avg:system.cpu.user{*}",
                },
              ],
              style: {
                palette: "purple",
                lineType: "solid",
                lineWidth: "normal",
              },
              displayType: "overlay",
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
