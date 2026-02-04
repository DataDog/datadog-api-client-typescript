/**
 * Get content pack states returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getContentPacksStates"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

apiInstance
  .getContentPacksStates()
  .then((data: v2.SecurityMonitoringContentPackStatesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
