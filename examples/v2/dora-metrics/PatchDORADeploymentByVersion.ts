/**
 * Patch a deployment event by version returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.patchDORADeploymentByVersion"] = true;
const apiInstance = new v2.DORAMetricsApi(configuration);

const params: v2.DORAMetricsApiPatchDORADeploymentByVersionRequest = {
  body: {
    data: {
      attributes: {
        changeFailure: true,
        env: "production",
        remediation: {
          type: "rollback",
          version: "v1.2.2",
        },
        service: "my-service",
        version: "v1.2.3",
      },
      type: "dora_deployment_patch_request",
    },
  },
};

apiInstance
  .patchDORADeploymentByVersion(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
