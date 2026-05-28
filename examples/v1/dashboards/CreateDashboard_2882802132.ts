/**
 * Create a new dashboard with hostmap infra widget
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard",
    description: undefined,
    widgets: [
      {
        layout: {
          x: 0,
          y: 0,
          width: 47,
          height: 22,
        },
        definition: {
          title: "",
          titleSize: "16",
          titleAlign: "left",
          type: "hostmap",
          requests: {
            requestType: "infrastructure_hostmap",
            nodeType: "host",
            filter: "env:prod",
            groupBy: [
              {
                column: "tags",
                key: "service",
              },
            ],
            enrichments: [
              {
                responseFormat: "scalar",
                queries: [
                  {
                    dataSource: "metrics",
                    name: "query1",
                    query: "avg:system.cpu.user{*} by {host}",
                  },
                ],
                formulas: [
                  {
                    formula: "query1",
                    dimension: "fill",
                  },
                ],
              },
            ],
            style: {
              palette: "green_to_orange",
              paletteFlip: false,
            },
          },
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
