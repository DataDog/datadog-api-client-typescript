/**
 * List replay analysis issues returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listReplayAnalysisIssues"] = true;
const apiInstance = new v2.RumReplayAnalysisApi(configuration);

apiInstance
  .listReplayAnalysisIssues()
  .then((data: v2.ReplayAnalysisIssuesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
