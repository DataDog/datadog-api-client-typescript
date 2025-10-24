/**
 * Get a deployment by ID returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getFleetDeployment"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

// there is a valid "deployment" in the system
const DEPLOYMENT_ID = process.env.DEPLOYMENT_ID as string;

const params: v2.FleetAutomationApiGetFleetDeploymentRequest = {
  deploymentId: DEPLOYMENT_ID,
};

apiInstance
  .getFleetDeployment(params)
  .then((data: v2.FleetDeploymentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
