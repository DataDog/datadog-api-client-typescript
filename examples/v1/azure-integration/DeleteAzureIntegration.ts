/**
 * Delete an Azure integration returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.AzureIntegrationApi(configuration);

const params: v1.AzureIntegrationApiDeleteAzureIntegrationRequest = {
  body: {
    clientId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    tenantName: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  },
};

apiInstance
  .deleteAzureIntegration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
