/**
 * Get a WAF Policy returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ApplicationSecurityApi(configuration);

// there is a valid "policy" in the system
const POLICY_DATA_ID = process.env.POLICY_DATA_ID as string;

const params: v2.ApplicationSecurityApiGetApplicationSecurityWafPolicyRequest =
  {
    policyId: POLICY_DATA_ID,
  };

apiInstance
  .getApplicationSecurityWafPolicy(params)
  .then((data: v2.ApplicationSecurityPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
