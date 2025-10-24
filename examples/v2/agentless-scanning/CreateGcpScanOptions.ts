/**
 * Create GCP scan options returns "Agentless scan options enabled successfully." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AgentlessScanningApi(configuration);

const params: v2.AgentlessScanningApiCreateGcpScanOptionsRequest = {
  body: {
    data: {
      id: "new-project",
      type: "gcp_scan_options",
      attributes: {
        vulnHostOs: true,
        vulnContainersOs: true,
      },
    },
  },
};

apiInstance
  .createGcpScanOptions(params)
  .then((data: v2.GcpScanOptions) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
