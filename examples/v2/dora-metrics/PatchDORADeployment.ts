/**
 * Patch a deployment event returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DORAMetricsApi(configuration);

const params: v2.DORAMetricsApiPatchDORADeploymentRequest = {
  body: {
    data: {
      attributes: {
        changeFailure: true,
        remediation: {
          id: "eG42zNIkVjM",
          type: "rollback",
        },
      },
      id: "z_RwVLi7v4Y",
      type: "dora_deployment_patch_request",
    },
  },
  deploymentId: "deployment_id",
};

apiInstance
  .patchDORADeployment(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
