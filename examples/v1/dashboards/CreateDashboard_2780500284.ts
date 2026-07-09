/**
 * Create a new dashboard with hostmap DDSQL widget
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
            requestType: "data_projection",
            limit: 1000,
            query: {
              dataSource: "dataset",
              datasetProvider: "ddsql_query",
              datasetId: "abc-123-def",
            },
            projection: {
              type: "hostmap",
              dimensions: [
                {
                  column: "entity_id",
                  dimension: "node",
                },
                {
                  column: "parent_id",
                  dimension: "group",
                },
                {
                  column: "cpu_usage",
                  dimension: "fill",
                },
              ],
            },
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
