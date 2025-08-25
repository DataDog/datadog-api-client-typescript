/**
 * Get Okta account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OktaIntegrationApi(configuration);

// there is a valid "okta_account" in the system
const OKTA_ACCOUNT_DATA_ID = process.env.OKTA_ACCOUNT_DATA_ID as string;

const params: v2.OktaIntegrationApiGetOktaAccountRequest = {
  accountId: OKTA_ACCOUNT_DATA_ID,
};

apiInstance
  .getOktaAccount(params)
  .then((data: v2.OktaAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
