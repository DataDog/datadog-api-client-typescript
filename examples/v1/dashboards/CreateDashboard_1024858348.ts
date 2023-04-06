/**
 * Create a new dashboard with a formulas and functions treemap widget
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
          type: "treemap",
          requests: [
            {
              formulas: [
                {
                  formula: "hour_before(query1)",
                },
                {
                  formula: "query1",
                },
              ],
              queries: [
                {
                  dataSource: "logs",
                  name: "query1",
                  search: {
                    query: "",
                  },
                  indexes: ["*"],
                  compute: {
                    aggregation: "count",
                  },
                  groupBy: [],
                },
              ],
              responseFormat: "scalar",
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
