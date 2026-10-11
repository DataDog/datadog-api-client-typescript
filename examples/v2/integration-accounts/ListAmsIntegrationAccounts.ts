/**
 * List integration accounts returns "OK: List of all accounts for the specified integration." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.IntegrationAccountsApi(configuration);

const params: v2.IntegrationAccountsApiListAmsIntegrationAccountsRequest = {
  integrationName: "integration_name",
  interfaceId: "interface_id",
};

apiInstance
  .listAmsIntegrationAccounts(params)
  .then((data: v2.AmsIntegrationAccountsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
