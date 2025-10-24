/**
 * List all deployments returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listFleetDeployments"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

apiInstance
  .listFleetDeployments()
  .then((data: v2.FleetDeploymentsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
