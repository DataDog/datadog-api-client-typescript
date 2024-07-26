/**
 * Create an Azure integration returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.AzureIntegrationApi(configuration);

const params: v1.AzureIntegrationApiCreateAzureIntegrationRequest = {
  body: {
    appServicePlanFilters: "key:value,filter:example",
    automute: true,
    clientId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    clientSecret: "TestingRh2nx664kUy5dIApvM54T4AtO",
    containerAppFilters: "key:value,filter:example",
    cspmEnabled: true,
    customMetricsEnabled: true,
    errors: ["*"],
    hostFilters: "key:value,filter:example",
    newClientId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    newTenantName: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    resourceCollectionEnabled: true,
    tenantName: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  },
};

apiInstance
  .createAzureIntegration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
