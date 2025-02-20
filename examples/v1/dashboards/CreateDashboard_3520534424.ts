/**
 * Create a new dashboard with timeseries widget with custom_unit
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
        definition: {
          title: "",
          titleSize: "16",
          titleAlign: "left",
          showLegend: true,
          legendLayout: "auto",
          time: {},
          type: "timeseries",
          requests: [
            {
              formulas: [
                {
                  formula: "query1",
                  numberFormat: {
                    unitScale: {
                      type: "canonical_unit",
                      unitName: "apdex",
                    },
                    unit: {
                      type: "canonical_unit",
                      unitName: "fraction",
                    },
                  },
                },
              ],
              queries: [
                {
                  dataSource: "metrics",
                  name: "query1",
                  query: "avg:system.cpu.user{*}",
                },
              ],
              responseFormat: "timeseries",
              displayType: "line",
            },
          ],
        },
        layout: {
          x: 0,
          y: 0,
          width: 12,
          height: 5,
        },
      },
    ],
    templateVariables: [],
    layoutType: "ordered",
    notifyList: [],
    reflowType: "fixed",
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
