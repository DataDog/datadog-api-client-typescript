/**
 * Create a Workload Protection agent rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CSMThreatsApi(configuration);

// there is a valid "policy_rc" in the system
const POLICY_DATA_ID = process.env.POLICY_DATA_ID as string;

const params: v2.CSMThreatsApiCreateCSMThreatsAgentRuleRequest = {
  body: {
    data: {
      attributes: {
        description: "My Agent rule",
        enabled: true,
        expression: `exec.file.name == "sh"`,
        agentVersion: "> 7.60",
        filters: [],
        name: "examplecsmthreat",
        policyId: POLICY_DATA_ID,
        productTags: [],
      },
      type: "agent_rule",
    },
  },
};

apiInstance
  .createCSMThreatsAgentRule(params)
  .then((data: v2.CloudWorkloadSecurityAgentRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
