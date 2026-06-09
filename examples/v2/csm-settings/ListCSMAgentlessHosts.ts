/**
 * List agentless hosts returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listCSMAgentlessHosts"] = true;
const apiInstance = new v2.CSMSettingsApi(configuration);

apiInstance
  .listCSMAgentlessHosts()
  .then((data: v2.CsmAgentlessHostsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
