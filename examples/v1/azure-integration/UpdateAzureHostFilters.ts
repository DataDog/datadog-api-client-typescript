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
    clientSecret: "testingx./Sw*g/Y33t..R1cH+hScMDt",
    cspmEnabled: true,
    customMetricsEnabled: true,
    errors: ["*"],
    hostFilters: "key:value,filter:example",
    newClientId: "new1c7f6-1234-5678-9101-3fcbf464test",
    newTenantName: "new1c44-1234-5678-9101-cc00736ftest",
    tenantName: "testc44-1234-5678-9101-cc00736ftest",
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
