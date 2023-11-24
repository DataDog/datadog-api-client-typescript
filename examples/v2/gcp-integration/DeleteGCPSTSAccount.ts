/**
 * Delete an STS enabled GCP Account returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.GCPIntegrationApi(configuration);

// there is a valid "gcp_sts_account" in the system
const GCP_STS_ACCOUNT_DATA_ID = process.env.GCP_STS_ACCOUNT_DATA_ID as string;

const params: v2.GCPIntegrationApiDeleteGCPSTSAccountRequest = {
  accountId: GCP_STS_ACCOUNT_DATA_ID,
};

apiInstance
  .deleteGCPSTSAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
