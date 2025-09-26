/**
 * Create a new timeseries widget with product_analytics data source
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard with product_analytics datasource",
    widgets: [
      {
        definition: {
          title: "",
          showLegend: true,
          legendLayout: "auto",
          legendColumns: ["avg", "min", "max", "value", "sum"],
          time: {},
          type: "timeseries",
          requests: [
            {
              formulas: [
                {
                  formula: "query1",
                },
              ],
              queries: [
                {
                  dataSource: "product_analytics",
                  name: "query1",
                  search: {
                    query: "test_level:test",
                  },
                  indexes: ["*"],
                  compute: {
                    aggregation: "count",
                  },
                  groupBy: [],
                },
              ],
              responseFormat: "timeseries",
              style: {
                palette: "dog_classic",
                lineType: "solid",
                lineWidth: "normal",
              },
              displayType: "line",
            },
          ],
        },
      },
    ],
    layoutType: "ordered",
    reflowType: "auto",
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
