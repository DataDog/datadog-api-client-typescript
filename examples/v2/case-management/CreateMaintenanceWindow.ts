/**
 * Create a maintenance window returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createMaintenanceWindow"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiCreateMaintenanceWindowRequest = {
  body: {
    data: {
      attributes: {
        endAt: new Date(2026, 6, 1, 6, 0, 0, 0),
        name: "Weekly maintenance",
        query: "project:SEC",
        startAt: new Date(2026, 6, 1, 0, 0, 0, 0),
      },
      type: "maintenance_window",
    },
  },
};

apiInstance
  .createMaintenanceWindow(params)
  .then((data: v2.MaintenanceWindowResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
