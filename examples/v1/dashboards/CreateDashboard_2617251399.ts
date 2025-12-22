/**
 * Create a new dashboard with bar_chart widget sorted by group
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard",
    description: "",
    widgets: [
      {
        layout: {
          x: 0,
          y: 0,
          width: 47,
          height: 15,
        },
        definition: {
          title: "",
          titleSize: "16",
          titleAlign: "left",
          time: {},
          style: {
            display: {
              type: "stacked",
              legend: "inline",
            },
            scaling: "relative",
            palette: "dog_classic",
          },
          type: "bar_chart",
          requests: [
            {
              queries: [
                {
                  dataSource: "metrics",
                  name: "query1",
                  query: "avg:system.cpu.user{*} by {service}",
                  aggregator: "avg",
                },
              ],
              formulas: [
                {
                  formula: "query1",
                },
              ],
              sort: {
                count: 10,
                orderBy: [
                  {
                    type: "group",
                    name: "service",
                    order: "asc",
                  },
                ],
              },
              responseFormat: "scalar",
            },
          ],
        },
      },
    ],
    templateVariables: [],
    layoutType: "free",
    notifyList: [],
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
