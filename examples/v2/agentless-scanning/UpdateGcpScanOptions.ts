/**
 * Patch GCP Scan Options returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AgentlessScanningApi(configuration);

const params: v2.AgentlessScanningApiUpdateGcpScanOptionsRequest = {
  body: {
    data: {
      id: "api-spec-test",
      type: "gcp_scan_options",
      attributes: {
        vulnContainersOs: false,
      },
    },
  },
  projectId: "api-spec-test",
};

apiInstance
  .updateGcpScanOptions(params)
  .then((data: v2.GcpScanOptions) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
