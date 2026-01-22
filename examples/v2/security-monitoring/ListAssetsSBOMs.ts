/**
 * List assets SBOMs returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiListAssetsSBOMsRequest = {
  filterAssetType: "Service",
  filterPackageName: "pandas",
};

apiInstance
  .listAssetsSBOMs(params)
  .then((data: v2.ListAssetsSBOMsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
