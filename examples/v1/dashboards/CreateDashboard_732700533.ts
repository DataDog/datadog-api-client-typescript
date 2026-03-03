/**
 * Create a new dashboard with formulas and functions events query using facet group by
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard with events facet group_by",
    widgets: [
      {
        definition: {
          type: "timeseries",
          requests: [
            {
              responseFormat: "timeseries",
              queries: [
                {
                  dataSource: "events",
                  name: "query1",
                  search: {
                    query: "",
                  },
                  compute: {
                    aggregation: "count",
                  },
                  groupBy: [
                    {
                      facet: "service",
                      limit: 10,
                    },
                  ],
                },
              ],
            },
          ],
        },
        layout: {
          x: 0,
          y: 0,
          width: 4,
          height: 2,
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
