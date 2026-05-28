/**
 * Get a pruned trace by ID returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getPrunedTraceByID"] = true;
const apiInstance = new v2.APMTraceApi(configuration);

const params: v2.APMTraceApiGetPrunedTraceByIDRequest = {
  traceId: "trace_id",
};

apiInstance
  .getPrunedTraceByID(params)
  .then((data: v2.PrunedTraceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
