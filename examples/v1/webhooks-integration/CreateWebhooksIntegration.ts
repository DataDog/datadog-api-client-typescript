/**
 * Create a webhooks integration returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

const params: v1.WebhooksIntegrationApiCreateWebhooksIntegrationRequest = {
  body: {
    name: "Example-Webhooks-Integration",
    url: "https://example.com/webhook",
  },
};

apiInstance
  .createWebhooksIntegration(params)
  .then((data: v1.WebhooksIntegration) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
