/**
 * Create a new dashboard with split graph widget
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
          width: 12,
          height: 8,
        },
        definition: {
          title: "",
          type: "split_group",
          sourceWidgetDefinition: {
            title: "",
            titleSize: "16",
            titleAlign: "left",
            type: "timeseries",
            requests: [
              {
                responseFormat: "timeseries",
                queries: [
                  {
                    name: "query1",
                    dataSource: "metrics",
                    query: "avg:system.cpu.user{*}",
                  },
                ],
                style: {
                  palette: "dog_classic",
                  lineType: "solid",
                  lineWidth: "normal",
                },
                displayType: "line",
              },
            ],
          },
          splitConfig: {
            splitDimensions: [
              {
                oneGraphPer: "service",
              },
            ],
            limit: 24,
            sort: {
              compute: {
                aggregation: "sum",
                metric: "system.cpu.user",
              },
              order: "desc",
            },
            staticSplits: [
              [
                {
                  tagKey: "service",
                  tagValues: ["cassandra"],
                },
                {
                  tagKey: "datacenter",
                  tagValues: [],
                },
              ],
              [
                {
                  tagKey: "demo",
                  tagValues: ["env"],
                },
              ],
            ],
          },
          size: "md",
          hasUniformYAxes: true,
        },
      },
    ],
    templateVariables: [],
    layoutType: "ordered",
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
