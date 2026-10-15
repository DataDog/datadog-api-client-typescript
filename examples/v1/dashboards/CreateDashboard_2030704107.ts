/**
 * Create a dashboard with network device flows formula query
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
    title: "Example-Dashboard network device flows",
    widgets: [
      {
        definition: {
          type: "timeseries",
          requests: [
            {
              responseFormat: "timeseries",
              queries: [
                {
                  dataSource: "network_device_flows",
                  name: "query1",
                  search: {
                    query: "",
                  },
                  compute: {
                    aggregation: "count",
                  },
                  groupBy: {
                    fields: ["@source.ip"],
                    limit: 10,
                  },
                },
              ],
            },
          ],
        },
        layout: {
          x: 0,
          y: 0,
          width: 4,
          height: 2,
        },
      },
    ],
    layoutType: "ordered",
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
