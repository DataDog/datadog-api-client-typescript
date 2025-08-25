/**
 * Create a new dashboard with template variable presets using values returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    description: undefined,
    layoutType: "ordered",
    notifyList: [],
    reflowType: "auto",
    restrictedRoles: [],
    templateVariablePresets: [
      {
        name: "my saved view",
        templateVariables: [
          {
            name: "datacenter",
            values: ["*", "my-host"],
          },
        ],
      },
    ],
    templateVariables: [
      {
        availableValues: ["my-host", "host1", "host2"],
        defaults: ["my-host"],
        name: "host1",
        prefix: "host",
      },
    ],
    title: "",
    widgets: [
      {
        definition: {
          requests: {
            fill: {
              q: "avg:system.cpu.user{*}",
            },
          },
          type: "hostmap",
        },
      },
    ],
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
