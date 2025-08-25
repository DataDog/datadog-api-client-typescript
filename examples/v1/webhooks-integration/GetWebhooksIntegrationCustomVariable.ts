/**
 * Get a custom variable returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

const params: v1.WebhooksIntegrationApiGetWebhooksIntegrationCustomVariableRequest =
  {
    customVariableName: "custom_variable_name",
  };

apiInstance
  .getWebhooksIntegrationCustomVariable(params)
  .then((data: v1.WebhooksIntegrationCustomVariableResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
