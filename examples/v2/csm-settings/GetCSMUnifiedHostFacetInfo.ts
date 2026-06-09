/**
 * Get unified host facet info returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getCSMUnifiedHostFacetInfo"] = true;
const apiInstance = new v2.CSMSettingsApi(configuration);

const params: v2.CSMSettingsApiGetCSMUnifiedHostFacetInfoRequest = {
  facet: "cloud_provider",
};

apiInstance
  .getCSMUnifiedHostFacetInfo(params)
  .then((data: v2.CsmHostFacetInfoResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
