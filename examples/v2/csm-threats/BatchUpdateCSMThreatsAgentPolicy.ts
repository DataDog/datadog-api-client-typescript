/**
 * Batch update CSM Threats Agent policies returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CSMThreatsApi(configuration);

// there is a valid "policy_rc" in the system
const POLICY_DATA_ID = process.env.POLICY_DATA_ID as string;

const params: v2.CSMThreatsApiBatchUpdateCSMThreatsAgentPolicyRequest = {
  body: {
    data: {
      attributes: {
        policies: [
          {
            _delete: false,
            description: "Updated agent policy",
            enabled: true,
            hostTags: ["env:test"],
            id: POLICY_DATA_ID,
            name: "updated_agent_policy",
            priority: 20,
          },
        ],
      },
      id: "batch_update_req",
      type: "policies",
    },
  },
};

apiInstance
  .batchUpdateCSMThreatsAgentPolicy(params)
  .then((data: v2.CloudWorkloadSecurityAgentPoliciesListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
