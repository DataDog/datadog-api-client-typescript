/**
 * Cancel a deployment returns "Deployment successfully canceled." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.cancelFleetDeployment"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

const params: v2.FleetAutomationApiCancelFleetDeploymentRequest = {
  deploymentId: "deployment_id",
};

apiInstance
  .cancelFleetDeployment(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
