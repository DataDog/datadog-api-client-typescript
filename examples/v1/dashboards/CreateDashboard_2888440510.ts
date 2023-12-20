/**
 * Create a new dashboard with split graph widget from distribution widget
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
            type: "distribution",
            requests: [
              {
                responseFormat: "scalar",
                queries: [
                  {
                    dataSource: "metrics",
                    name: "query1",
                    query: "avg:system.cpu.user{*} by {service}",
                    aggregator: "avg",
                  },
                ],
              },
            ],
            xaxis: {
              scale: "linear",
              includeZero: true,
              min: "auto",
              max: "auto",
            },
            yaxis: {
              scale: "linear",
              includeZero: true,
              min: "auto",
              max: "auto",
            },
          },
          splitConfig: {
            splitDimensions: [
              {
                oneGraphPer: "service",
              },
            ],
            limit: 6,
            sort: {
              compute: {
                aggregation: "sum",
                metric: "system.cpu.user",
              },
              order: "desc",
            },
          },
          size: "md",
        },
      },
    ],
    templateVariables: [],
    layoutType: "ordered",
    isReadOnly: false,
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
