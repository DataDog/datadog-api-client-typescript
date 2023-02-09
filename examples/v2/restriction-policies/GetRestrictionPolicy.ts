/**
 * Get a restriction policy returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RestrictionPoliciesApi(configuration);

const params: v2.RestrictionPoliciesApiGetRestrictionPolicyRequest = {
  resourceId: "dashboard:abc-def-ghi",
};

apiInstance
  .getRestrictionPolicy(params)
  .then((data: v2.GetRestrictionPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
