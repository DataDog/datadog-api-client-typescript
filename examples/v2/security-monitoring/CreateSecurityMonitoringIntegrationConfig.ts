/**
 * Create an entity context sync configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.createSecurityMonitoringIntegrationConfig"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSecurityMonitoringIntegrationConfigRequest =
  {
    body: {
      data: {
        attributes: {
          domain: "siem-test.com",
          integrationType: "GOOGLE_WORKSPACE",
          name: "My GWS Integration",
          secrets: {
            admin_email: "test@example.com",
          },
          settings: {
            setting1: "value1",
          },
        },
        type: "integration_config",
      },
    },
  };

apiInstance
  .createSecurityMonitoringIntegrationConfig(params)
  .then((data: v2.SecurityMonitoringIntegrationConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
