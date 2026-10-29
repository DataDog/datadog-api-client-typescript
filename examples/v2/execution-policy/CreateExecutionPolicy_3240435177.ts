/**
 * Create a Slack execution policy with scope and targets returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createExecutionPolicy"] = true;
const apiInstance = new v2.ExecutionPolicyApi(configuration);

const params: v2.ExecutionPolicyApiCreateExecutionPolicyRequest = {
  body: {
    data: {
      type: "execution_policy",
      attributes: {
        name: "Cassette Execution Policy exampleexecutionpolicy",
        effect: "allow",
        actionPattern: {
          integration: "INTEGRATION_SLACK",
          actionFqns: ["com.datadoghq.slack.*"],
        },
        scope: {
          slack: {
            rules: [
              {
                channelNameSelectors: ["incident-*"],
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
};

apiInstance
  .createExecutionPolicy(params)
  .then((data: v2.ExecutionPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
