/**
 * Get account schema for an integration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WebIntegrationsApi(configuration);

const params: v2.WebIntegrationsApiGetWebIntegrationAccountSchemaRequest = {
  integrationName: "twilio",
};

apiInstance
  .getWebIntegrationAccountSchema(params)
  .then((data: v2.WebIntegrationAccountSchemaResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
