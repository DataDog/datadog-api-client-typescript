/**
 * Create a configuration deployment returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FleetAutomationApi(configuration);

const params: v2.FleetAutomationApiCreateFleetDeploymentConfigureV2Request = {
  body: {
    data: {
      attributes: {
        configOperations: [
          {
            fileOp: "merge-patch",
            filePath: "/datadog.yaml",
            patch: {
              log_level: "info",
            },
          },
        ],
        dryRun: true,
        filterQuery: "env:prod AND service:example-fleet-automation",
      },
      type: "deployment",
    },
  },
};

apiInstance
  .createFleetDeploymentConfigureV2(params)
  .then((data: v2.FleetDeploymentConfigureV2DryRunResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
