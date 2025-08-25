/**
 * List Cloudflare accounts returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudflareIntegrationApi(configuration);

apiInstance
  .listCloudflareAccounts()
  .then((data: v2.CloudflareAccountsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
