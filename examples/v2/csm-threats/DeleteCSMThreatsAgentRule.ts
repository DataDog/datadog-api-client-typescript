/**
 * Delete a Workload Protection agent rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CSMThreatsApi(configuration);

// there is a valid "agent_rule_rc" in the system
const AGENT_RULE_DATA_ID = process.env.AGENT_RULE_DATA_ID as string;

// there is a valid "policy_rc" in the system
const POLICY_DATA_ID = process.env.POLICY_DATA_ID as string;

const params: v2.CSMThreatsApiDeleteCSMThreatsAgentRuleRequest = {
  agentRuleId: AGENT_RULE_DATA_ID,
  policyId: POLICY_DATA_ID,
};

apiInstance
  .deleteCSMThreatsAgentRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
