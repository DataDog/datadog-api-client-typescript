/**
 * Get a deployment event returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DORAMetricsApi(configuration);

const params: v2.DORAMetricsApiGetDORADeploymentRequest = {
  deploymentId: "deployment_id",
};

apiInstance
  .getDORADeployment(params)
  .then((data: v2.DORAFetchResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
