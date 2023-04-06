/**
 * Create a new dashboard returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    layoutType: "ordered",
    title: "Example-Dashboard with Profile Metrics Query",
    widgets: [
      {
        definition: {
          type: "timeseries",
          requests: [
            {
              profileMetricsQuery: {
                compute: {
                  aggregation: "sum",
                  facet: "@prof_core_cpu_cores",
                },
                search: {
                  query: "runtime:jvm",
                },
                groupBy: [
                  {
                    facet: "service",
                    limit: 10,
                    sort: {
                      aggregation: "sum",
                      order: "desc",
                      facet: "@prof_core_cpu_cores",
                    },
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
