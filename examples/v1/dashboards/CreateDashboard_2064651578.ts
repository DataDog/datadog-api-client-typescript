/**
 * Create a new dashboard with team tags returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard",
    widgets: [
      {
        definition: {
          title: "",
          titleSize: "16",
          titleAlign: "left",
          time: {},
          type: "change",
          requests: [
            {
              formulas: [
                {
                  formula: "hour_before(query1)",
                },
                {
                  formula: "query1",
                },
              ],
              queries: [
                {
                  dataSource: "logs",
                  name: "query1",
                  search: {
                    query: "",
                  },
                  indexes: ["*"],
                  compute: {
                    aggregation: "count",
                  },
                  groupBy: [],
                },
              ],
              responseFormat: "scalar",
              compareTo: "hour_before",
              increaseGood: true,
              orderBy: "change",
              changeType: "absolute",
              orderDir: "desc",
            },
          ],
        },
        layout: {
          x: 0,
          y: 0,
          width: 4,
          height: 4,
        },
      },
    ],
    tags: ["team:foobar"],
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
