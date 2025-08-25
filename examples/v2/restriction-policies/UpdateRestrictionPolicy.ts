/**
 * Update a restriction policy returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RestrictionPoliciesApi(configuration);

// there is a valid "user" in the system

const params: v2.RestrictionPoliciesApiUpdateRestrictionPolicyRequest = {
  body: {
    data: {
      id: "dashboard:test-update",
      type: "restriction_policy",
      attributes: {
        bindings: [
          {
            relation: "editor",
            principals: ["org:00000000-0000-beef-0000-000000000000"],
          },
        ],
      },
    },
  },
  resourceId: "dashboard:test-update",
};

apiInstance
  .updateRestrictionPolicy(params)
  .then((data: v2.RestrictionPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
