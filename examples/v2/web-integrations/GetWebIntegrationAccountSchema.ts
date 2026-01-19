/**
 * Get account schema for an integration returns "OK: The JSON schema for the integration's account configuration."
 * response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WebIntegrationsApi(configuration);

const params: v2.WebIntegrationsApiGetWebIntegrationAccountSchemaRequest = {
  integrationName: "integration_name",
};

apiInstance
  .getWebIntegrationAccountSchema(params)
  .then((data: v2.WebIntegrationAccountSchemaResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
