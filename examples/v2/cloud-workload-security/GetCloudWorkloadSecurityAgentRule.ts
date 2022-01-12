/**
 * Get a Cloud Workload Security Agent rule returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.CloudWorkloadSecurityApi(configuration);

// there is a valid "agent_rule" in the system
let AGENT_RULE_DATA_ID = process.env.AGENT_RULE_DATA_ID as string;

let params: v2.CloudWorkloadSecurityApiGetCloudWorkloadSecurityAgentRuleRequest =
  {
    agentRuleId: AGENT_RULE_DATA_ID,
  };

apiInstance
  .getCloudWorkloadSecurityAgentRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
