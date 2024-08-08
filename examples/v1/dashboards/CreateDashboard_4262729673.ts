/**
 * Create a new timeseries widget with legacy live span time format
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard with legacy live span time",
    widgets: [
      {
        definition: {
          title: "",
          showLegend: true,
          legendLayout: "auto",
          legendColumns: ["avg", "min", "max", "value", "sum"],
          time: {
            liveSpan: "5m",
          },
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
                  dataSource: "ci_pipelines",
                  name: "query1",
                  search: {
                    query: "ci_level:job",
                  },
                  indexes: ["*"],
                  compute: {
                    aggregation: "count",
                    metric: "@ci.queue_time",
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
