/**
 * Create a Cloud Workload Security Agent rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CSMThreatsApi(configuration);

const params: v2.CSMThreatsApiCreateCloudWorkloadSecurityAgentRuleRequest = {
  body: {
    data: {
      attributes: {
        description: "My Agent rule",
        enabled: true,
        expression: `exec.file.name == "sh"`,
        filters: [],
        name: "examplecsmthreat",
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
