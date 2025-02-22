/**
 * Get SBOM returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getSBOM"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetSBOMRequest = {
  assetType: "Repository",
  filterAssetName: "github.com/datadog/datadog-agent",
};

apiInstance
  .getSBOM(params)
  .then((data: v2.GetSBOMResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
