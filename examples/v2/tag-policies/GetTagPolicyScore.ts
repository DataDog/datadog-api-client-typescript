/**
 * Get a tag policy compliance score returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getTagPolicyScore"] = true;
const apiInstance = new v2.TagPoliciesApi(configuration);

const params: v2.TagPoliciesApiGetTagPolicyScoreRequest = {
  policyId: "policy_id",
};

apiInstance
  .getTagPolicyScore(params)
  .then((data: v2.TagPolicyScoreResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
