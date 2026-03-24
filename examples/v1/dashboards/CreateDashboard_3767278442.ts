/**
 * Create a new dashboard with a query_value widget containing a description
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
          width: 47,
          height: 15,
        },
        definition: {
          title: "",
          titleSize: "16",
          titleAlign: "left",
          description: "Example widget description",
          time: {},
          type: "query_value",
          requests: [
            {
              responseFormat: "scalar",
              queries: [
                {
                  name: "query1",
                  dataSource: "metrics",
                  query: "avg:system.cpu.user{*}",
                  aggregator: "avg",
                },
              ],
            },
          ],
          autoscale: true,
          precision: 2,
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
