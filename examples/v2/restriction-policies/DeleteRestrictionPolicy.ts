/**
 * Delete a restriction policy returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RestrictionPoliciesApi(configuration);

const params: v2.RestrictionPoliciesApiDeleteRestrictionPolicyRequest = {
  resourceId: "dashboard:test-delete",
};

apiInstance
  .deleteRestrictionPolicy(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
