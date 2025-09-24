/**
 * Create azure scan options returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AgentlessScanningApi(configuration);

const params: v2.AgentlessScanningApiCreateAzureScanOptionsRequest = {
  body: {
    data: {
      attributes: {
        vulnContainersOs: true,
        vulnHostOs: true,
      },
      id: "12345678-90ab-cdef-1234-567890abcdef",
      type: "azure_scan_options",
    },
  },
};

apiInstance
  .createAzureScanOptions(params)
  .then((data: v2.AzureScanOptions) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
