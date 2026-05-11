/**
 * Create a web integration account returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createWebIntegrationAccount"] = true;
const apiInstance = new v2.WebIntegrationsApi(configuration);

const params: v2.WebIntegrationsApiCreateWebIntegrationAccountRequest = {
  body: {
    data: {
      attributes: {
        name: "my-databricks-account",
        secrets: {
          client_secret: "my-client-secret",
        },
        settings: {
          workspace_url: "https://example.azuredatabricks.net",
        },
      },
      type: "Account",
    },
  },
  integrationName: "integration_name",
};

apiInstance
  .createWebIntegrationAccount(params)
  .then((data: v2.WebIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
