/**
 * Create a CSM Threats Agent rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createCSMThreatsAgentRule"] = true;
const apiInstance = new v2.CloudWorkloadSecurityApi(configuration);

const params: v2.CloudWorkloadSecurityApiCreateCSMThreatsAgentRuleRequest = {
  body: {
    data: {
      attributes: {
        description: "My Agent rule",
        enabled: true,
        expression: `exec.file.name == "sh"`,
        name: "my_agent_rule",
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
