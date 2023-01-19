/**
 * Get Cloudflare account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CloudflareIntegrationApi(configuration);

// there is a valid "cloudflare_account" in the system
const CLOUDFLARE_ACCOUNT_DATA_ID = process.env
  .CLOUDFLARE_ACCOUNT_DATA_ID as string;

const params: v2.CloudflareIntegrationApiGetCloudflareAccountRequest = {
  accountId: CLOUDFLARE_ACCOUNT_DATA_ID,
};

apiInstance
  .getCloudflareAccount(params)
  .then((data: v2.CloudflareAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
