/**
 * Update deployment gate returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateDeploymentGate"] = true;
const apiInstance = new v2.DeploymentGatesApi(configuration);

// there is a valid "deployment_gate" in the system
const DEPLOYMENT_GATE_DATA_ID = process.env.DEPLOYMENT_GATE_DATA_ID as string;

const params: v2.DeploymentGatesApiUpdateDeploymentGateRequest = {
  body: {
    data: {
      attributes: {
        dryRun: false,
      },
      id: "12345678-1234-1234-1234-123456789012",
      type: "deployment_gate",
    },
  },
  id: DEPLOYMENT_GATE_DATA_ID,
};

apiInstance
  .updateDeploymentGate(params)
  .then((data: v2.DeploymentGateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
