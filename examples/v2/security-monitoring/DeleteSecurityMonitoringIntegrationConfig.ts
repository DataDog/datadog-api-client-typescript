/**
 * Delete an entity context sync configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.deleteSecurityMonitoringIntegrationConfig"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiDeleteSecurityMonitoringIntegrationConfigRequest =
  {
    integrationConfigId: "integration_config_id",
  };

apiInstance
  .deleteSecurityMonitoringIntegrationConfig(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
