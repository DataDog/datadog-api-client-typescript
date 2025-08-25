/**
 * Create a new dashboard with sunburst widget and metrics data
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard",
    widgets: [
      {
        definition: {
          title: "",
          titleSize: "16",
          titleAlign: "left",
          type: "sunburst",
          requests: [
            {
              responseFormat: "scalar",
              formulas: [
                {
                  formula: "query1",
                },
              ],
              queries: [
                {
                  query: "sum:system.mem.used{*} by {service}",
                  dataSource: "metrics",
                  name: "query1",
                  aggregator: "sum",
                },
              ],
              style: {
                palette: "dog_classic",
              },
            },
          ],
        },
        layout: {
          x: 0,
          y: 0,
          width: 4,
          height: 4,
        },
      },
    ],
    layoutType: "ordered",
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
