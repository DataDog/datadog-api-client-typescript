/**
 * List integration accounts returns "OK: List of all accounts for the specified integration." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WebIntegrationsApi(configuration);

const params: v2.WebIntegrationsApiListWebIntegrationAccountsRequest = {
  integrationName: "integration_name",
};

apiInstance
  .listWebIntegrationAccounts(params)
  .then((data: v2.WebIntegrationAccountsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
