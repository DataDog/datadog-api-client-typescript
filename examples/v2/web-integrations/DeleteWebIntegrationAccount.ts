/**
 * Delete integration account returns "OK: The account was successfully deleted." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WebIntegrationsApi(configuration);

const params: v2.WebIntegrationsApiDeleteWebIntegrationAccountRequest = {
  integrationName: "integration_name",
  accountId: "account_id",
};

apiInstance
  .deleteWebIntegrationAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
