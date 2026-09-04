/**
 * Get a Databricks integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getDatabricksIntegrationAccount"] = true;
const apiInstance = new v2.DatabricksIntegrationAccountsApi(configuration);

const params: v2.DatabricksIntegrationAccountsApiGetDatabricksIntegrationAccountRequest =
  {
    accountId: "account_id",
  };

apiInstance
  .getDatabricksIntegrationAccount(params)
  .then((data: v2.DatabricksIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
