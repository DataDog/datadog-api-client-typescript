/**
 * Get the evidence for an ownership inference returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getOwnershipEvidence"] = true;
const apiInstance = new v2.CSMOwnershipApi(configuration);

const params: v2.CSMOwnershipApiGetOwnershipEvidenceRequest = {
  resourceId: "test-resource",
  ownerType: "team",
};

apiInstance
  .getOwnershipEvidence(params)
  .then((data: v2.OwnershipEvidenceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
