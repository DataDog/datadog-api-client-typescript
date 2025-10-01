/**
 * Update azure scan options returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AgentlessScanningApi(configuration);

const params: v2.AgentlessScanningApiUpdateAzureScanOptionsRequest = {
  body: {
    data: {
      id: "12345678-90ab-cdef-1234-567890abcdef",
      type: "azure_scan_options",
    },
  },
  subscriptionId: "12345678-90ab-cdef-1234-567890abcdef",
};

apiInstance
  .updateAzureScanOptions(params)
  .then((data: v2.AzureScanOptions) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
