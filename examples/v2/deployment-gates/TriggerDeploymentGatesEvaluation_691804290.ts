/**
 * Trigger a deployment gates evaluation returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.triggerDeploymentGatesEvaluation"] = true;
const apiInstance = new v2.DeploymentGatesApi(configuration);

// there is a valid "deployment_gate" in the system
const DEPLOYMENT_GATE_DATA_ATTRIBUTES_IDENTIFIER = process.env
  .DEPLOYMENT_GATE_DATA_ATTRIBUTES_IDENTIFIER as string;

const params: v2.DeploymentGatesApiTriggerDeploymentGatesEvaluationRequest = {
  body: {
    data: {
      attributes: {
        env: "production",
        identifier: DEPLOYMENT_GATE_DATA_ATTRIBUTES_IDENTIFIER,
        service: "my-service",
      },
      type: "deployment_gates_evaluation_request",
    },
  },
};

apiInstance
  .triggerDeploymentGatesEvaluation(params)
  .then((data: v2.DeploymentGatesEvaluationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
