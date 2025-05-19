/**
 * Update a Workload Protection agent rule (US1-FED) returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CSMThreatsApi(configuration);

// there is a valid "agent_rule" in the system
const AGENT_RULE_DATA_ID = process.env.AGENT_RULE_DATA_ID as string;

const params: v2.CSMThreatsApiUpdateCloudWorkloadSecurityAgentRuleRequest = {
  body: {
    data: {
      attributes: {
        description: "Updated Agent rule",
        expression: `exec.file.name == "sh"`,
      },
      id: AGENT_RULE_DATA_ID,
      type: "agent_rule",
    },
  },
  agentRuleId: AGENT_RULE_DATA_ID,
};

apiInstance
  .updateCloudWorkloadSecurityAgentRule(params)
  .then((data: v2.CloudWorkloadSecurityAgentRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
