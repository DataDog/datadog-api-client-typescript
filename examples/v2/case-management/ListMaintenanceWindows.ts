/**
 * List maintenance windows returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listMaintenanceWindows"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

apiInstance
  .listMaintenanceWindows()
  .then((data: v2.MaintenanceWindowsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
