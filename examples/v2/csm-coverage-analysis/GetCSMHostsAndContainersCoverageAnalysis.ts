/**
 * Get the CSM Hosts and Containers Coverage Analysis returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CSMCoverageAnalysisApi(configuration);

apiInstance
  .getCSMHostsAndContainersCoverageAnalysis()
  .then((data: v2.CsmHostsAndContainersCoverageAnalysisResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
