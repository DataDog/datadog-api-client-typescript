/**
 * Okta Public - Get account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OktaIntegrationApi(configuration);

const params: v2.OktaIntegrationApiGetOktaAccountRequest = {
  accountId: "account_id",
};

apiInstance
  .getOktaAccount(params)
  .then((data: v2.OktaAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
