/**
 * Update STS Service Account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.GCPIntegrationApi(configuration);

const params: v2.GCPIntegrationApiUpdateGCPSTSAccountRequest = {
  body: {
    data: {
      attributes: {
        clientEmail:
          "datadog-service-account@test-project.iam.gserviceaccount.com",
        hostFilters: [],
      },
      id: "d291291f-12c2-22g4-j290-123456678897",
      type: "gcp_service_account",
    },
  },
  accountId: "account_id",
};

apiInstance
  .updateGCPSTSAccount(params)
  .then((data: v2.GCPSTSServiceAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
