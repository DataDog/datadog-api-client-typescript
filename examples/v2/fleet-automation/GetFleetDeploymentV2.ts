/**
 * Get a deployment by ID returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FleetAutomationApi(configuration);

// there is a valid "deployment" in the system
const DEPLOYMENT_ID = process.env.DEPLOYMENT_ID as string;

const params: v2.FleetAutomationApiGetFleetDeploymentV2Request = {
  deploymentId: DEPLOYMENT_ID,
};

apiInstance
  .getFleetDeploymentV2(params)
  .then((data: v2.FleetDeploymentV2DetailResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
