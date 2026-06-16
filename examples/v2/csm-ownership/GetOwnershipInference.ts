/**
 * Get an ownership inference by owner type returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getOwnershipInference"] = true;
const apiInstance = new v2.CSMOwnershipApi(configuration);

const params: v2.CSMOwnershipApiGetOwnershipInferenceRequest = {
  resourceId: "test-resource",
  ownerType: "team",
};

apiInstance
  .getOwnershipInference(params)
  .then((data: v2.OwnershipInferenceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
