import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.CloudWorkloadSecurityApi(configuration);

let params: v2.CloudWorkloadSecurityApiCreateCloudWorkloadSecurityAgentRuleRequest =
  {
    // CloudWorkloadSecurityAgentRuleCreateRequest | The definition of the new Agent rule.
    body: {
      data: {
        attributes: {
          description: "My Agent rule",
          enabled: true,
          expression: 'exec.file.name == "sh"',
          name: "my_agent_rule",
        },
        type: "agent_rule",
      },
    },
  };

apiInstance
  .createCloudWorkloadSecurityAgentRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
