/**
 * Create a new entry for your service account with resource collection enabled returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.GCPIntegrationApi(configuration);

const params: v2.GCPIntegrationApiCreateGCPSTSAccountRequest = {
  body: {
    data: {
      attributes: {
        resourceCollectionEnabled: true,
        clientEmail:
          "Test-252bf553ef04b351@test-project.iam.gserviceaccount.com",
        hostFilters: [],
      },
      type: "gcp_service_account",
    },
  },
};

apiInstance
  .createGCPSTSAccount(params)
  .then((data: v2.GCPSTSServiceAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
