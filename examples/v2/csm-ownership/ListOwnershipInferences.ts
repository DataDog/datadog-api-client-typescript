/**
 * List ownership inferences for a resource returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listOwnershipInferences"] = true;
const apiInstance = new v2.CSMOwnershipApi(configuration);

const params: v2.CSMOwnershipApiListOwnershipInferencesRequest = {
  resourceId: "test-resource",
};

apiInstance
  .listOwnershipInferences(params)
  .then((data: v2.OwnershipInferenceListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
