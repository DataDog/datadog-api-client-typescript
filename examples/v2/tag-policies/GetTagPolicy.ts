/**
 * Get a tag policy returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getTagPolicy"] = true;
const apiInstance = new v2.TagPoliciesApi(configuration);

const params: v2.TagPoliciesApiGetTagPolicyRequest = {
  policyId: "123",
};

apiInstance
  .getTagPolicy(params)
  .then((data: v2.TagPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
