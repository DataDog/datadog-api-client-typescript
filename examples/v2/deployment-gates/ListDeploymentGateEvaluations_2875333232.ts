/**
 * List deployment gate evaluations returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listDeploymentGateEvaluations"] = true;
const apiInstance = new v2.DeploymentGatesApi(configuration);

(async () => {
  try {
    for await (const item of apiInstance.listDeploymentGateEvaluationsWithPagination()) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
