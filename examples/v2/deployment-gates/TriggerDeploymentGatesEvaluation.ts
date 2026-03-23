/**
 * Trigger a deployment gate evaluation returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.triggerDeploymentGatesEvaluation"] = true;
const apiInstance = new v2.DeploymentGatesApi(configuration);

const params: v2.DeploymentGatesApiTriggerDeploymentGatesEvaluationRequest = {
  body: {
    data: {
      attributes: {
        env: "staging",
        identifier: "pre-deploy",
        primaryTag: "region:us-east-1",
        service: "transaction-backend",
        version: "v1.2.3",
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
