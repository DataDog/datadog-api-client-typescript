/**
 * Get rules for a deployment gate returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getDeploymentGateRules"] = true;
const apiInstance = new v2.DeploymentGatesApi(configuration);

// there is a valid "deployment_gate" in the system
const DEPLOYMENT_GATE_DATA_ID = process.env.DEPLOYMENT_GATE_DATA_ID as string;

const params: v2.DeploymentGatesApiGetDeploymentGateRulesRequest = {
  gateId: DEPLOYMENT_GATE_DATA_ID,
};

apiInstance
  .getDeploymentGateRules(params)
  .then((data: v2.DeploymentGateRulesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
