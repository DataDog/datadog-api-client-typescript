/**
 * Update a webhook returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

// there is a valid "webhook" in the system
let WEBHOOK_NAME = process.env.WEBHOOK_NAME as string;

let params: v1.WebhooksIntegrationApiUpdateWebhooksIntegrationRequest = {
  body: {
    url: "https://example.com/webhook-updated",
  },
  webhookName: WEBHOOK_NAME,
};

apiInstance
  .updateWebhooksIntegration(params)
  .then((data: v1.WebhooksIntegration) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
