/**
 * Get agentless host facet info returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getCSMAgentlessHostFacetInfo"] = true;
const apiInstance = new v2.CSMSettingsApi(configuration);

const params: v2.CSMSettingsApiGetCSMAgentlessHostFacetInfoRequest = {
  facet: "cloud_provider",
};

apiInstance
  .getCSMAgentlessHostFacetInfo(params)
  .then((data: v2.CsmHostFacetInfoResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
