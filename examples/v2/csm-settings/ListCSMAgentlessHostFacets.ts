/**
 * List agentless host facets returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listCSMAgentlessHostFacets"] = true;
const apiInstance = new v2.CSMSettingsApi(configuration);

apiInstance
  .listCSMAgentlessHostFacets()
  .then((data: v2.CsmAgentlessHostFacetsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
