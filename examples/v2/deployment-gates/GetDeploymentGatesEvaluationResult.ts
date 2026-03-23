/**
 * Get a deployment gate evaluation result returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getDeploymentGatesEvaluationResult"] =
  true;
const apiInstance = new v2.DeploymentGatesApi(configuration);

const params: v2.DeploymentGatesApiGetDeploymentGatesEvaluationResultRequest = {
  id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .getDeploymentGatesEvaluationResult(params)
  .then((data: v2.DeploymentGatesEvaluationResultResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
