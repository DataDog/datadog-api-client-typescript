/**
 * Create a new dashboard with a change widget using formulas and functions slo query
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

// there is a valid "slo" in the system
const SLO_DATA_0_ID = process.env.SLO_DATA_0_ID as string;

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
                  name: "query1",
                  dataSource: "slo",
                  sloId: SLO_DATA_0_ID,
                  measure: "slo_status",
                  groupMode: "overall",
                  sloQueryType: "metric",
                  additionalQueryFilters: "*",
                },
              ],
              responseFormat: "scalar",
              orderBy: "change",
              changeType: "absolute",
              increaseGood: true,
              orderDir: "asc",
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
