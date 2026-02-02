/**
 * Create a tag policy returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createTagPolicy"] = true;
const apiInstance = new v2.TagPoliciesApi(configuration);

const params: v2.TagPoliciesApiCreateTagPolicyRequest = {
  body: {
    data: {
      attributes: {
        enabled: true,
        negated: false,
        policyName: "production-tags-policy",
        required: true,
        scope: "env",
        source: "logs",
        tagKey: "service",
        tagValuePatterns: ["api", "web"],
      },
      type: "tag_policy",
    },
  },
};

apiInstance
  .createTagPolicy(params)
  .then((data: v2.TagPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
