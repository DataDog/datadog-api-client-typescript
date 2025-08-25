/**
 * Get Fastly account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FastlyIntegrationApi(configuration);

// there is a valid "fastly_account" in the system
const FASTLY_ACCOUNT_DATA_ID = process.env.FASTLY_ACCOUNT_DATA_ID as string;

const params: v2.FastlyIntegrationApiGetFastlyAccountRequest = {
  accountId: FASTLY_ACCOUNT_DATA_ID,
};

apiInstance
  .getFastlyAccount(params)
  .then((data: v2.FastlyAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
