/**
 * Delete Azure scan options returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AgentlessScanningApi(configuration);

const params: v2.AgentlessScanningApiDeleteAzureScanOptionsRequest = {
  subscriptionId: "12345678-90ab-cdef-1234-567890abcdef",
};

apiInstance
  .deleteAzureScanOptions(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
