/**
 * Create a new dashboard with a live default_timeframe returns "OK" response
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
          type: "note",
          content: "test",
          backgroundColor: "white",
          fontSize: "14",
          textAlign: "left",
          showTick: false,
          tickPos: "50%",
          tickEdge: "left",
        },
      },
    ],
    defaultTimeframe: {
      type: "live",
      unit: "hour",
      value: 4,
    },
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
