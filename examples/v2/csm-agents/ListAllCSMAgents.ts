/**
 * Get all CSM Agents returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CSMAgentsApi(configuration);

apiInstance
  .listAllCSMAgents()
  .then((data: v2.CsmAgentsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
