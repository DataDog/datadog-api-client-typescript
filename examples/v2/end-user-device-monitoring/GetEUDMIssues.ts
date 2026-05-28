/**
 * Get all device issue definitions returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.EndUserDeviceMonitoringApi(configuration);

apiInstance
  .getEUDMIssues()
  .then((data: v2.IssueDefinitionArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
