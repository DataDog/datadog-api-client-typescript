/**
 * List Model Lab runs returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listModelLabRuns"] = true;
const apiInstance = new v2.ModelLabAPIApi(configuration);

apiInstance
  .listModelLabRuns()
  .then((data: v2.ModelLabRunsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
