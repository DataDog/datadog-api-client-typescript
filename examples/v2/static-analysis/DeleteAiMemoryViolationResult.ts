/**
 * Delete an AI memory violation result returns "Successfully deleted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteAiMemoryViolationResult"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

const params: v2.StaticAnalysisApiDeleteAiMemoryViolationResultRequest = {
  id: "42",
};

apiInstance
  .deleteAiMemoryViolationResult(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
