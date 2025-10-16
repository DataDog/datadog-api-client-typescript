/**
 * List scanned assets metadata returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listScannedAssetsMetadata"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

apiInstance
  .listScannedAssetsMetadata()
  .then((data: v2.ScannedAssetsMetadata) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
