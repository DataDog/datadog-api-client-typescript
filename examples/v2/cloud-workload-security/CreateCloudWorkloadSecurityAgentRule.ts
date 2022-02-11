/**
 * Create a Cloud Workload Security Agent rule returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.CloudWorkloadSecurityApi(configuration);

let params: v2.CloudWorkloadSecurityApiCreateCloudWorkloadSecurityAgentRuleRequest =
  {
    body: {
      data: {
        attributes: {
          description: "Test Agent rule",
          enabled: true,
          expression: `exec.file.name == "sh"`,
          name: "examplecreateacloudworkloadsecurityagentrulereturnsokresponse",
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
