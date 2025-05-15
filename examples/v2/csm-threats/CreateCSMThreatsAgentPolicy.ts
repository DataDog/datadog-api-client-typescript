/**
 * Create a Workload Protection policy returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CSMThreatsApi(configuration);

const params: v2.CSMThreatsApiCreateCSMThreatsAgentPolicyRequest = {
  body: {
    data: {
      attributes: {
        description: "My agent policy",
        enabled: true,
        hostTagsLists: [["env:test"]],
        name: "my_agent_policy",
      },
      type: "policy",
    },
  },
};

apiInstance
  .createCSMThreatsAgentPolicy(params)
  .then((data: v2.CloudWorkloadSecurityAgentPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
