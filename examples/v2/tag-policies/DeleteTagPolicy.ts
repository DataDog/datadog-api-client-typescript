/**
 * Delete a tag policy returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteTagPolicy"] = true;
const apiInstance = new v2.TagPoliciesApi(configuration);

const params: v2.TagPoliciesApiDeleteTagPolicyRequest = {
  policyId: "123",
};

apiInstance
  .deleteTagPolicy(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
