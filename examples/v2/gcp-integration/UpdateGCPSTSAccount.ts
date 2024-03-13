/**
 * Update STS Service Account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.GCPIntegrationApi(configuration);

// there is a valid "gcp_sts_account" in the system
const GCP_STS_ACCOUNT_DATA_ID = process.env.GCP_STS_ACCOUNT_DATA_ID as string;

const params: v2.GCPIntegrationApiUpdateGCPSTSAccountRequest = {
  body: {
    data: {
      attributes: {
        clientEmail: "Test-252bf553ef04b351@example.com",
        hostFilters: ["foo:bar"],
      },
      id: GCP_STS_ACCOUNT_DATA_ID,
      type: "gcp_service_account",
    },
  },
  accountId: GCP_STS_ACCOUNT_DATA_ID,
};

apiInstance
  .updateGCPSTSAccount(params)
  .then((data: v2.GCPSTSServiceAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
