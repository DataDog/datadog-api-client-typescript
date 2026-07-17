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
            adminEmail: "admin@example.com",
            serviceAccountJson: {
              clientEmail: "svc@my-project.iam.gserviceaccount.com",
              privateKey:
                "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----",
              projectId: "my-project",
              type: "service_account",
            },
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
