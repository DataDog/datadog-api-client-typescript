/**
 * Create a new dashboard with a query value widget using the percentile aggregator
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    layoutType: "ordered",
    title: "Example-Dashboard with QVW Percentile Aggregator",
    widgets: [
      {
        definition: {
          titleSize: "16",
          title: "",
          titleAlign: "left",
          precision: 2,
          time: {},
          autoscale: true,
          requests: [
            {
              formulas: [
                {
                  formula: "query1",
                },
              ],
              responseFormat: "scalar",
              queries: [
                {
                  query: "p90:dist.dd.dogweb.latency{*}",
                  dataSource: "metrics",
                  name: "query1",
                  aggregator: "percentile",
                },
              ],
            },
          ],
          type: "query_value",
        },
        layout: {
          y: 0,
          x: 0,
          height: 2,
          width: 2,
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
