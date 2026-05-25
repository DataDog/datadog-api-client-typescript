/**
 * Get node types for a language returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getStaticAnalysisNodeTypes"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetStaticAnalysisNodeTypesRequest = {
  language: "python",
};

apiInstance
  .getStaticAnalysisNodeTypes(params)
  .then((data: v2.NodeTypesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
