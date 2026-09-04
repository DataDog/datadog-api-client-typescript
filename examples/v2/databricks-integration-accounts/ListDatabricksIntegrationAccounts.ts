/**
 * List Databricks integration accounts returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listDatabricksIntegrationAccounts"] = true;
const apiInstance = new v2.DatabricksIntegrationAccountsApi(configuration);

apiInstance
  .listDatabricksIntegrationAccounts()
  .then((data: v2.DatabricksIntegrationAccountsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
