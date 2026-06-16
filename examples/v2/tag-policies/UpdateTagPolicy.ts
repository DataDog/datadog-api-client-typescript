/**
 * Update a tag policy returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateTagPolicy"] = true;
const apiInstance = new v2.TagPoliciesApi(configuration);

const params: v2.TagPoliciesApiUpdateTagPolicyRequest = {
  body: {
    data: {
      attributes: {
        policyType: "surfacing",
        tagValuePatterns: [],
      },
      id: "123",
      type: "tag_policy",
    },
  },
  policyId: "policy_id",
};

apiInstance
  .updateTagPolicy(params)
  .then((data: v2.TagPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
