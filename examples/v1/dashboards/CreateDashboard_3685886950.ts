/**
 * Create a new dashboard with a timeseries widget using formulas and functions metrics query with native semantic_mode
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    layoutType: "ordered",
    title: "Example-Dashboard with native semantic_mode",
    widgets: [
      {
        definition: {
          type: "timeseries",
          requests: [
            {
              queries: [
                {
                  dataSource: "metrics",
                  name: "query1",
                  query: "avg:system.cpu.user{*}",
                  semanticMode: "native",
                },
              ],
              responseFormat: "timeseries",
              formulas: [
                {
                  formula: "query1",
                },
              ],
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
