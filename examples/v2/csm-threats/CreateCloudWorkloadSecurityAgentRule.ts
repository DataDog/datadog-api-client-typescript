/**
 * Create a Workload Protection agent rule (US1-FED) returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.CSMThreatsApi(configuration);

const params: v2.CSMThreatsApiCreateCloudWorkloadSecurityAgentRuleRequest = {
  body: {
    data: {
      attributes: {
        actions: [
          {
            coredump: {},
            disabled: false,
            hash: {},
            kill: {},
            log: {},
            metadata: {},
            networkFilter: {},
            set: {},
          },
        ],
        blocking: [],
        description: "My Agent rule",
        disabled: [],
        enabled: true,
        expression: `exec.file.name == "sh"`,
        filters: [],
        monitoring: [],
        name: "my_agent_rule",
        policyId: "a8c8e364-6556-434d-b798-a4c23de29c0b",
        productTags: [],
        silent: false,
      },
      type: "agent_rule",
    },
  },
};

apiInstance
  .createCloudWorkloadSecurityAgentRule(params)
  .then((data: v2.CloudWorkloadSecurityAgentRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
