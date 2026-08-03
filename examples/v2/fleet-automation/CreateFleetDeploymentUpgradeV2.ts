/**
 * Upgrade hosts returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FleetAutomationApi(configuration);

const params: v2.FleetAutomationApiCreateFleetDeploymentUpgradeV2Request = {
  body: {
    data: {
      attributes: {
        filterQuery: "env:prod AND service:example-fleet-automation",
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
  .createFleetDeploymentUpgradeV2(params)
  .then((data: v2.FleetDeploymentV2CreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
