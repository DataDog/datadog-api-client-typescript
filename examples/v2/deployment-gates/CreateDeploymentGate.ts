/**
 * Create deployment gate returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createDeploymentGate"] = true;
const apiInstance = new v2.DeploymentGatesApi(configuration);

const params: v2.DeploymentGatesApiCreateDeploymentGateRequest = {
  body: {
    data: {
      attributes: {
        dryRun: false,
        env: "production",
        identifier: "my-gate-1",
        service: "my-service",
      },
      type: "deployment_gate",
    },
  },
};

apiInstance
  .createDeploymentGate(params)
  .then((data: v2.DeploymentGateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
