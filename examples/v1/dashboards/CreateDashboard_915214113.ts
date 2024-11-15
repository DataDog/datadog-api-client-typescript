/**
 * Create a new dashboard with geomap widget
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
              sort: {
                count: 250,
                orderBy: [
                  {
                    type: "formula",
                    index: 0,
                    order: "desc",
                  },
                ],
              },
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
