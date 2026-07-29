/**
 * List integration accounts returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listIntegrationAccounts"] = true;
const apiInstance = new v2.IntegrationAccountsApi(configuration);

const params: v2.IntegrationAccountsApiListIntegrationAccountsRequest = {
  integrationId: "twilio",
  interfaceId: "twilio",
};

apiInstance
  .listIntegrationAccounts(params)
  .then((data: v2.IntegrationAccountsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
