/**
 * Get all deployment gates returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listDeploymentGates"] = true;
const apiInstance = new v2.DeploymentGatesApi(configuration);

apiInstance
  .listDeploymentGates()
  .then((data: v2.DeploymentGatesListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
