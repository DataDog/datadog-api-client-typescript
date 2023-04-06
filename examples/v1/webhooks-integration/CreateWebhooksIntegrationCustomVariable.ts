/**
 * Create a custom variable returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

const params: v1.WebhooksIntegrationApiCreateWebhooksIntegrationCustomVariableRequest =
  {
    body: {
      isSecret: true,
      name: "EXAMPLEWEBHOOKSINTEGRATION",
      value: "CUSTOM_VARIABLE_VALUE",
    },
  };

apiInstance
  .createWebhooksIntegrationCustomVariable(params)
  .then((data: v1.WebhooksIntegrationCustomVariableResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
