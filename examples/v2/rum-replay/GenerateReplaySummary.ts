/**
 * Generate replay summary returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.generateReplaySummary"] = true;
const apiInstance = new v2.RumReplayApi(configuration);

const params: v2.RumReplayApiGenerateReplaySummaryRequest = {
  body: {
    data: {
      type: "replay_summary_request",
    },
  },
  sessionId: "00000000-0000-0000-0000-000000000001",
  dataSource: "rum",
};

apiInstance
  .generateReplaySummary(params)
  .then((data: v2.ReplaySummaryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
