/**
 * Create a new dashboard with powerpack widget
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

// there is a valid "powerpack" in the system
const POWERPACK_DATA_ID = process.env.POWERPACK_DATA_ID as string;

const params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
    title: "Example-Dashboard with powerpack widget",
    layoutType: "ordered",
    widgets: [
      {
        definition: {
          type: "powerpack",
          powerpackId: POWERPACK_DATA_ID,
          templateVariables: {
            controlledExternally: [],
            controlledByPowerpack: [
              {
                name: "foo",
                prefix: "bar",
                values: ["baz", "qux", "quuz"],
              },
            ],
          },
        },
        layout: {
          x: 1,
          y: 1,
          width: 2,
          height: 2,
          isColumnBreak: false,
        },
      },
    ],
    description: "description",
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
