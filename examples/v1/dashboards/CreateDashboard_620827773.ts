/**
 * Create a new dashboard with topology_map custom widget
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
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
          width: 47,
          height: 15,
        },
        definition: {
          title: "",
          titleSize: "16",
          titleAlign: "left",
          type: "topology_map",
          layout: {
            type: "hierarchical",
            direction: "left-to-right",
          },
          data: {
            nodes: {
              columns: [
                {
                  kind: "string",
                  id: "id",
                  values: ["service:web", "service:db"],
                },
                {
                  kind: "string",
                  id: "subtitle",
                  values: ["api-team", null],
                },
                {
                  kind: "scalar",
                  id: "values[1]",
                  values: [1.5, null],
                  meta: {
                    unit: {
                      type: "canonical_unit",
                      unitName: "second",
                    },
                  },
                },
              ],
            },
            edges: {
              columns: [
                {
                  kind: "string",
                  id: "source",
                  values: ["service:web"],
                },
                {
                  kind: "string",
                  id: "target",
                  values: ["service:db"],
                },
              ],
            },
          },
          requests: [
            {
              responseFormat: "scalar",
              queries: [
                {
                  dataSource: "metrics",
                  name: "a",
                  query: "avg:system.cpu.user{*} by {service}",
                  aggregator: "avg",
                },
              ],
              formulas: [
                {
                  formula: "a",
                },
              ],
              projection: {
                type: "custom_topology_map_node",
                dimensions: [
                  {
                    column: "a",
                    dimension: "values[0]",
                  },
                ],
              },
            },
          ],
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
