/**
 * Create a Databricks integration account returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createDatabricksIntegrationAccount"] =
  true;
const apiInstance = new v2.DatabricksIntegrationAccountsApi(configuration);

const params: v2.DatabricksIntegrationAccountsApiCreateDatabricksIntegrationAccountRequest =
  {
    body: {
      data: {
        attributes: {
          authentication: {
            authType: "databricks-oauth",
            azureTenantId: "4d3bac44-0230-4732-9e70-cc00736f0a97",
            clientId: "5c10654a-b3a3-4840-b37f-f477590c70a0",
            clientSecret: "your-client-secret",
          },
          dataflows: {
            databricksCloudCostMetrics: {
              enabled: true,
              settings: {
                ccmCollectAllWorkspaces: true,
              },
            },
            databricksDataJobMonitoring: {
              enabled: true,
              settings: {
                ddApiKeyId: "fe383f4e-09fc-46bf-8e10-4efdd453a646",
                ddApiKeySecret: "your-datadog-api-key",
                djmGlobalInitScriptEnabled: true,
                scriptGpumEnabled: true,
                scriptLogsEnabled: true,
              },
            },
            databricksDataObservability: {
              enabled: true,
              settings: {
                doCrawlersCron: "0 * * * *",
                syncSystemCatalog: true,
              },
            },
            databricksModelServingMetrics: {
              enabled: true,
            },
            databricksServerlessJobs: {
              enabled: true,
            },
          },
          name: "My Databricks Workspace",
          settings: {
            systemTablesSqlWarehouseId: "aba7c023d4172910",
            workspaceUrl: "https://dbc-1234abcd.cloud.databricks.com",
          },
        },
        type: "integration-account",
      },
    },
  };

apiInstance
  .createDatabricksIntegrationAccount(params)
  .then((data: v2.DatabricksIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
