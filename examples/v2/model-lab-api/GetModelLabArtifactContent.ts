/**
 * Get Model Lab artifact content returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getModelLabArtifactContent"] = true;
const apiInstance = new v2.ModelLabAPIApi(configuration);

const params: v2.ModelLabAPIApiGetModelLabArtifactContentRequest = {
  projectId: "1",
  artifactPath: "runs/42/model/weights.pt",
};

apiInstance
  .getModelLabArtifactContent(params)
  .then((data: client.HttpFile) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
