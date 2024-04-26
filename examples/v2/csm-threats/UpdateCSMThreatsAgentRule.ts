/**
 * Update a CSM Threats Agent rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CSMThreatsApi(configuration);

// there is a valid "agent_rule_rc" in the system
const AGENT_RULE_DATA_ID = process.env.AGENT_RULE_DATA_ID as string;

const params: v2.CSMThreatsApiUpdateCSMThreatsAgentRuleRequest = {
  body: {
    data: {
      attributes: {
        description: "Test Agent rule",
        enabled: true,
        expression: `exec.file.name == "sh"`,
      },
      type: "agent_rule",
      id: AGENT_RULE_DATA_ID,
    },
  },
  agentRuleId: AGENT_RULE_DATA_ID,
};

apiInstance
  .updateCSMThreatsAgentRule(params)
  .then((data: v2.CloudWorkloadSecurityAgentRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
