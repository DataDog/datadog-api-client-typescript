/**
 * Delete a Workload Protection agent rule (US1-FED) returns "OK" response
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

const params: v2.CSMThreatsApiDeleteCloudWorkloadSecurityAgentRuleRequest = {
  agentRuleId: "agent_rule_id",
};

apiInstance
  .deleteCloudWorkloadSecurityAgentRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
