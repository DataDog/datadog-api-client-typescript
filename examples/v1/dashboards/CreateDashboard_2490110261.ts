/**
 * Create a new dashboard with an audit logs query
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    layoutType: "ordered",
    title: "Example-Dashboard with Audit Logs Query",
    widgets: [
      {
        definition: {
          type: "timeseries",
          requests: [
            {
              responseFormat: "timeseries",
              queries: [
                {
                  search: {
                    query: "",
                  },
                  dataSource: "audit",
                  compute: {
                    aggregation: "count",
                  },
                  name: "query1",
                  indexes: ["*"],
                  groupBy: [],
                },
              ],
            },
          ],
        },
        layout: {
          x: 2,
          y: 0,
          width: 4,
          height: 2,
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
