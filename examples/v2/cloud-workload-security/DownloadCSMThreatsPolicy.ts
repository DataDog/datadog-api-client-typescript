/**
 * Get the latest CSM Threats policy returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.downloadCSMThreatsPolicy"] = true;
const apiInstance = new v2.CloudWorkloadSecurityApi(configuration);

apiInstance
  .downloadCSMThreatsPolicy()
  .then((data: client.HttpFile) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
