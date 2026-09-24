/**
 * List Model Lab run artifacts returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listModelLabRunArtifacts"] = true;
const apiInstance = new v2.ModelLabAPIApi(configuration);

const params: v2.ModelLabAPIApiListModelLabRunArtifactsRequest = {
  runId: 70158,
};

apiInstance
  .listModelLabRunArtifacts(params)
  .then((data: v2.ModelLabRunArtifactsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
