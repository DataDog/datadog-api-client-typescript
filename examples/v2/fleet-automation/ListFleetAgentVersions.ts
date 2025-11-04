/**
 * List all available Agent versions returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listFleetAgentVersions"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

apiInstance
  .listFleetAgentVersions()
  .then((data: v2.FleetAgentVersionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
