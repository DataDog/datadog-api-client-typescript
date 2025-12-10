/**
 * Create a geomap widget with conditional formats and text formats
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard",
    description: "Example-Dashboard",
    widgets: [
      {
        definition: {
          title: "Log Count by Service and Source",
          type: "geomap",
          requests: [
            {
              responseFormat: "scalar",
              queries: [
                {
                  dataSource: "rum",
                  name: "query1",
                  search: {
                    query: "@type:session",
                  },
                  indexes: ["*"],
                  compute: {
                    aggregation: "count",
                  },
                  groupBy: [],
                },
              ],
              conditionalFormats: [
                {
                  comparator: ">",
                  value: 1000,
                  palette: "white_on_green",
                },
              ],
              formulas: [
                {
                  formula: "query1",
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
            },
            {
              responseFormat: "event_list",
              query: {
                dataSource: "logs_stream",
                queryString: "",
                indexes: [],
                storage: "hot",
              },
              columns: [
                {
                  field: "@network.client.geoip.location.latitude",
                  width: "auto",
                },
                {
                  field: "@network.client.geoip.location.longitude",
                  width: "auto",
                },
                {
                  field: "@network.client.geoip.country.iso_code",
                  width: "auto",
                },
                {
                  field: "@network.client.geoip.subdivision.name",
                  width: "auto",
                },
              ],
              style: {
                colorBy: "status",
              },
              textFormats: [
                {
                  match: {
                    type: "is",
                    value: "error",
                  },
                  palette: "white_on_red",
                },
              ],
            },
          ],
          style: {
            palette: "hostmap_blues",
            paletteFlip: false,
          },
          view: {
            focus: "NORTH_AMERICA",
          },
        },
        layout: {
          x: 0,
          y: 0,
          width: 12,
          height: 6,
        },
      },
    ],
    templateVariables: [],
    layoutType: "ordered",
    notifyList: [],
    reflowType: "fixed",
    tags: [],
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
