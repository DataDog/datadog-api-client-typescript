/**
 * Update a maintenance window returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateMaintenanceWindow"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiUpdateMaintenanceWindowRequest = {
  body: {
    data: {
      attributes: {},
      type: "maintenance_window",
    },
  },
  maintenanceWindowId: "maintenance_window_id",
};

apiInstance
  .updateMaintenanceWindow(params)
  .then((data: v2.MaintenanceWindowResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
