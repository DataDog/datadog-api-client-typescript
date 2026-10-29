/**
 * Update an execution policy to Slack with scope and targets returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateExecutionPolicy"] = true;
const apiInstance = new v2.ExecutionPolicyApi(configuration);

// there is a valid "execution_policy" in the system
const EXECUTION_POLICY_DATA_ID = process.env.EXECUTION_POLICY_DATA_ID as string;

const params: v2.ExecutionPolicyApiUpdateExecutionPolicyRequest = {
  body: {
    data: {
      id: EXECUTION_POLICY_DATA_ID,
      type: "execution_policy",
      attributes: {
        name: "Cassette Execution Policy Updated",
        effect: "deny",
        actionPattern: {
          integration: "INTEGRATION_SLACK",
          actionFqns: ["*"],
        },
        scope: {
          slack: {
            rules: [
              {
                channelNameSelectors: ["incident-denied"],
              },
            ],
          },
        },
        targets: [
          {
            name: "Incident workspace",
            agentTags: ["slack_workspace_id:T01234567"],
          },
        ],
      },
    },
  },
  policyId: EXECUTION_POLICY_DATA_ID,
};

apiInstance
  .updateExecutionPolicy(params)
  .then((data: v2.ExecutionPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
