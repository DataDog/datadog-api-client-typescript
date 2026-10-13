/**
 * List deployment gate rule evaluations returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listDeploymentRuleEvaluations"] = true;
const apiInstance = new v2.DeploymentGatesApi(configuration);

(async () => {
  try {
    for await (const item of apiInstance.listDeploymentRuleEvaluationsWithPagination()) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
