/**
 * Create a new entry for your service account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.GCPIntegrationApi(configuration);

const params: v2.GCPIntegrationApiCreateGCPSTSAccountsV2Request = {
  body: {
    data: {
      attributes: {
        clientEmail: "dd-integration@datadog-staging.iam.gserviceaccount.com",
        hostFilters: [],
      },
    },
  },
};

apiInstance
  .createGCPSTSAccountsV2(params)
  .then((data: v2.AccountCreationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
