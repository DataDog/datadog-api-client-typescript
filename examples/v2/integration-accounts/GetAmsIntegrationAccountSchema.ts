/**
 * Get account schema for an integration returns "OK: The JSON schema for the integration's account configuration."
 * response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.IntegrationAccountsApi(configuration);

const params: v2.IntegrationAccountsApiGetAmsIntegrationAccountSchemaRequest = {
  integrationName: "integration_name",
  interfaceId: "interface_id",
};

apiInstance
  .getAmsIntegrationAccountSchema(params)
  .then((data: v2.AmsIntegrationAccountSchemaResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
