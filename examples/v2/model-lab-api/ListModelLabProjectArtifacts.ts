/**
 * List Model Lab project artifacts returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listModelLabProjectArtifacts"] = true;
const apiInstance = new v2.ModelLabAPIApi(configuration);

const params: v2.ModelLabAPIApiListModelLabProjectArtifactsRequest = {
  projectId: 2387,
};

apiInstance
  .listModelLabProjectArtifacts(params)
  .then((data: v2.ModelLabProjectArtifactsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
