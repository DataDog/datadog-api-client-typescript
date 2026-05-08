/**
 * Get replay analysis issue returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getReplayAnalysisIssue"] = true;
const apiInstance = new v2.RumReplayAnalysisApi(configuration);

const params: v2.RumReplayAnalysisApiGetReplayAnalysisIssueRequest = {
  issueId: "00000000-0000-0000-0000-000000000001",
};

apiInstance
  .getReplayAnalysisIssue(params)
  .then((data: v2.ReplayAnalysisIssueResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
