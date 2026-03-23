/**
 * Get a deployment gates evaluation result returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getDeploymentGatesEvaluationResult"] =
  true;
const apiInstance = new v2.DeploymentGatesApi(configuration);

// there is a valid "deployment_gates_evaluation" in the system
const DEPLOYMENT_GATES_EVALUATION_DATA_ID = process.env
  .DEPLOYMENT_GATES_EVALUATION_DATA_ID as string;

const params: v2.DeploymentGatesApiGetDeploymentGatesEvaluationResultRequest = {
  id: DEPLOYMENT_GATES_EVALUATION_DATA_ID,
};

apiInstance
  .getDeploymentGatesEvaluationResult(params)
  .then((data: v2.DeploymentGatesEvaluationResultResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
