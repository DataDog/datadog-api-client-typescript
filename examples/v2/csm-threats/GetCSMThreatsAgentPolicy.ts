/**
 * Get a Workload Protection policy returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CSMThreatsApi(configuration);

// there is a valid "policy_rc" in the system
const POLICY_DATA_ID = process.env.POLICY_DATA_ID as string;

const params: v2.CSMThreatsApiGetCSMThreatsAgentPolicyRequest = {
  policyId: POLICY_DATA_ID,
};

apiInstance
  .getCSMThreatsAgentPolicy(params)
  .then((data: v2.CloudWorkloadSecurityAgentPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
