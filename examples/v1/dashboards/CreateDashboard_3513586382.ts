/**
 * Create a geomap widget using an event_list request
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
          title: "",
          titleSize: "16",
          titleAlign: "left",
          type: "geomap",
          requests: [
            {
              responseFormat: "event_list",
              query: {
                dataSource: "logs_stream",
                queryString: "",
                indexes: [],
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
                {
                  field: "classic",
                  width: "auto",
                },
                {
                  field: "",
                  width: "auto",
                },
              ],
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
