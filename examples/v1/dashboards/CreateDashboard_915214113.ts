/**
 * Create a new dashboard with geomap widget
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Test-Example-Create_a_new_dashboard_with_geomap_widget",
    description: undefined,
    widgets: [
      {
        layout: {
          x: 0,
          y: 0,
          width: 47,
          height: 30,
        },
        definition: {
          title: "",
          titleSize: "16",
          titleAlign: "left",
          time: {},
          type: "geomap",
          requests: [
            {
              formulas: [
                {
                  formula: "query1",
                  limit: {
                    count: 250,
                    order: "desc",
                  },
                },
              ],
              queries: [
                {
                  name: "query1",
                  dataSource: "rum",
                  search: {
                    query: "",
                  },
                  indexes: ["*"],
                  compute: {
                    aggregation: "count",
                  },
                  groupBy: [
                    {
                      facet: "@geo.country_iso_code",
                      limit: 250,
                      sort: {
                        order: "desc",
                        aggregation: "count",
                      },
                    },
                  ],
                },
              ],
              responseFormat: "scalar",
            },
          ],
          style: {
            palette: "hostmap_blues",
            paletteFlip: false,
          },
          view: {
            focus: "WORLD",
          },
        },
      },
    ],
    templateVariables: [],
    layoutType: "free",
    isReadOnly: false,
    notifyList: [],
  },
};

apiInstance
  .createDashboard(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
