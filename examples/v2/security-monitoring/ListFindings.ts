/**
 * List findings returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listFindings"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

apiInstance
  .listFindings()
  .then((data: v2.ListFindingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
