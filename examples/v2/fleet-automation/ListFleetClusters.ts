/**
 * List all fleet clusters returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listFleetClusters"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

apiInstance
  .listFleetClusters()
  .then((data: v2.FleetClustersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
