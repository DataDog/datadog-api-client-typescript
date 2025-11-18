/**
 * Create deployment rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createDeploymentRule"] = true;
const apiInstance = new v2.DeploymentGatesApi(configuration);

// there is a valid "deployment_gate" in the system
const DEPLOYMENT_GATE_DATA_ID = process.env.DEPLOYMENT_GATE_DATA_ID as string;

const params: v2.DeploymentGatesApiCreateDeploymentRuleRequest = {
  body: {
    data: {
      attributes: {
        dryRun: false,
        name: "My deployment rule",
        options: {
          excludedResources: [],
        },
        type: "faulty_deployment_detection",
      },
      type: "deployment_rule",
    },
  },
  gateId: DEPLOYMENT_GATE_DATA_ID,
};

apiInstance
  .createDeploymentRule(params)
  .then((data: v2.DeploymentRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
