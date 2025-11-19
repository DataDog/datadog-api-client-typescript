/**
 * Delete deployment rule returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteDeploymentRule"] = true;
const apiInstance = new v2.DeploymentGatesApi(configuration);

// there is a valid "deployment_gate" in the system
const DEPLOYMENT_GATE_DATA_ID = process.env.DEPLOYMENT_GATE_DATA_ID as string;

// there is a valid "deployment_rule" in the system
const DEPLOYMENT_RULE_DATA_ID = process.env.DEPLOYMENT_RULE_DATA_ID as string;

const params: v2.DeploymentGatesApiDeleteDeploymentRuleRequest = {
  gateId: DEPLOYMENT_GATE_DATA_ID,
  id: DEPLOYMENT_RULE_DATA_ID,
};

apiInstance
  .deleteDeploymentRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
