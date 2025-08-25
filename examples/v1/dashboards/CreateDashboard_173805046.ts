/**
 * Create a new dashboard with slo widget
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

// there is a valid "slo" in the system
const SLO_DATA_0_ID = process.env.SLO_DATA_0_ID as string;

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard",
    description: "",
    widgets: [
      {
        layout: {
          x: 0,
          y: 0,
          width: 60,
          height: 21,
        },
        definition: {
          titleSize: "16",
          titleAlign: "left",
          type: "slo",
          viewType: "detail",
          timeWindows: ["7d"],
          sloId: SLO_DATA_0_ID,
          showErrorBudget: true,
          viewMode: "overall",
          globalTimeTarget: "0",
          additionalQueryFilters: "!host:excluded_host",
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
