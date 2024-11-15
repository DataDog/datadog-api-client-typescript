/**
 * Create a new dashboard with run-workflow widget
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
          title: "Run workflow title",
          titleSize: "16",
          titleAlign: "left",
          time: {},
          type: "run_workflow",
          workflowId: "2e055f16-8b6a-4cdd-b452-17a34c44b160",
          inputs: [
            {
              name: "environment",
              value: "$env.value",
            },
          ],
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
