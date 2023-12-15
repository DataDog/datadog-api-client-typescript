/**
 * Delete Okta account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OktaIntegrationApi(configuration);

const params: v2.OktaIntegrationApiDeleteOktaAccountRequest = {
  accountId: "account_id",
};

apiInstance
  .deleteOktaAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
