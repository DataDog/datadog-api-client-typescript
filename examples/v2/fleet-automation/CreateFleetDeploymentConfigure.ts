/**
 * Create a configuration deployment returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createFleetDeploymentConfigure"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

const params: v2.FleetAutomationApiCreateFleetDeploymentConfigureRequest = {
  body: {
    data: {
      attributes: {
        configOperations: [
          {
            fileOp: "merge-patch",
            filePath: "/datadog.yaml",
            patch: {
              apm_config: "{'enabled': True}",
              log_level: "debug",
              logs_enabled: "True",
            },
          },
        ],
        filterQuery: "env:prod AND service:web",
      },
      type: "deployment",
    },
  },
};

apiInstance
  .createFleetDeploymentConfigure(params)
  .then((data: v2.FleetDeploymentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
