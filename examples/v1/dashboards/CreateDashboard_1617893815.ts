/**
 * Create a new dashboard with formula and function distribution widget
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard",
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
          type: "distribution",
          requests: [
            {
              responseFormat: "scalar",
              queries: [
                {
                  dataSource: "logs",
                  name: "query1",
                  search: {
                    query: "",
                  },
                  indexes: ["*"],
                  compute: {
                    aggregation: "avg",
                    metric: "@duration",
                  },
                  groupBy: [
                    {
                      facet: "service",
                      limit: 1000,
                      sort: {
                        aggregation: "count",
                        order: "desc",
                      },
                    },
                  ],
                  storage: "hot",
                },
              ],
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
