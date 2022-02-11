import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.WebhooksIntegrationApi(configuration);

let params: v1.WebhooksIntegrationApiUpdateWebhooksIntegrationRequest = {
  // string | The name of the webhook.
  webhookName: "webhook_name_example",
  // WebhooksIntegrationUpdateRequest | Update an existing Datadog-Webhooks integration.
  body: {
    customHeaders: "customHeaders_example",
    encodeAs: "json",
    name: "WEBHOOK_NAME",
    payload: "payload_example",
    url: "https://example.com/webhook",
  },
};

apiInstance
  .updateWebhooksIntegration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
