/**
 * Upgrade hosts returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createFleetDeploymentUpgrade"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

const params: v2.FleetAutomationApiCreateFleetDeploymentUpgradeRequest = {
  body: {
    data: {
      attributes: {
        filterQuery: "env:prod AND service:web",
        targetPackages: [
          {
            name: "datadog-agent",
            version: "7.52.0",
          },
        ],
      },
      type: "deployment",
    },
  },
};

apiInstance
  .createFleetDeploymentUpgrade(params)
  .then((data: v2.FleetDeploymentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
