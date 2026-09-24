/**
 * Delete a Databricks integration account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.deleteDatabricksIntegrationAccount"] =
  true;
const apiInstance = new v2.DatabricksIntegrationApi(configuration);

const params: v2.DatabricksIntegrationApiDeleteDatabricksIntegrationAccountRequest =
  {
    accountId: "account_id",
  };

apiInstance
  .deleteDatabricksIntegrationAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
