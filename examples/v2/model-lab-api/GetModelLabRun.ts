/**
 * Get a Model Lab run returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getModelLabRun"] = true;
const apiInstance = new v2.ModelLabAPIApi(configuration);

const params: v2.ModelLabAPIApiGetModelLabRunRequest = {
  runId: 70158,
};

apiInstance
  .getModelLabRun(params)
  .then((data: v2.ModelLabRunResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
