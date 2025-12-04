/**
 * List all Datadog Agents returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listFleetAgents"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

apiInstance
  .listFleetAgents()
  .then((data: v2.FleetAgentsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
