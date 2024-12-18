/**
 * Update Azure integration host filters returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.AzureIntegrationApi(configuration);

const params: v1.AzureIntegrationApiUpdateAzureHostFiltersRequest = {
  body: {
    appServicePlanFilters: "key:value,filter:example",
    automute: true,
    clientId: "testc7f6-1234-5678-9101-3fcbf464test",
    clientSecret: "TestingRh2nx664kUy5dIApvM54T4AtO",
    containerAppFilters: "key:value,filter:example",
    cspmEnabled: true,
    customMetricsEnabled: true,
    errors: ["*"],
    hostFilters: "key:value,filter:example",
    metricsEnabled: true,
    metricsEnabledDefault: true,
    newClientId: "new1c7f6-1234-5678-9101-3fcbf464test",
    newTenantName: "new1c44-1234-5678-9101-cc00736ftest",
    resourceCollectionEnabled: true,
    resourceProviderConfigs: [
      {
        metricsEnabled: true,
        namespace: "Microsoft.Compute",
      },
    ],
    tenantName: "testc44-1234-5678-9101-cc00736ftest",
    usageMetricsEnabled: true,
  },
};

apiInstance
  .updateAzureHostFilters(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
