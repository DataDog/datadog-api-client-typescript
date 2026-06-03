/**
 * Retrieve a dependency scan result returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getSCAScan"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiGetSCAScanRequest = {
  jobId: "0190a3d4-1234-7000-8000-000000000000",
};

apiInstance
  .getSCAScan(params)
  .then((data: v2.ScanResultResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
