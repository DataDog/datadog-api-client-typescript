/**
 * Activate an entity context sync integration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.activateIntegration"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiActivateIntegrationRequest = {
  body: {
    data: {
      attributes: {
        domain: "default",
        name: "My Entra ID Integration",
        settings: {
          setting1: "value1",
        },
      },
      type: "activate_entra_id_request",
    },
  },
  integrationType: "entra_id",
};

apiInstance
  .activateIntegration(params)
  .then((data: v2.SecurityMonitoringIntegrationConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
