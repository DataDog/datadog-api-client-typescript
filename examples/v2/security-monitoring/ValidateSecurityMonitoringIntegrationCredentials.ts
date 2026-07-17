/**
 * Validate entity context sync credentials returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.validateSecurityMonitoringIntegrationCredentials"
] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiValidateSecurityMonitoringIntegrationCredentialsRequest =
  {
    body: {
      data: {
        attributes: {
          domain: "siem-test.com",
          integrationType: "GOOGLE_WORKSPACE",
          secrets: {
            admin_email: "test@example.com",
          },
        },
        type: "integration_config",
      },
    },
  };

apiInstance
  .validateSecurityMonitoringIntegrationCredentials(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
