/**
 * Add Cloudflare account returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudflareIntegrationApi(configuration);

const params: v2.CloudflareIntegrationApiCreateCloudflareAccountRequest = {
  body: {
    data: {
      attributes: {
        apiKey: "fakekey",
        email: "dev@datadoghq.com",
        name: "examplecloudflareintegration",
      },
      type: "cloudflare-accounts",
    },
  },
};

apiInstance
  .createCloudflareAccount(params)
  .then((data: v2.CloudflareAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
