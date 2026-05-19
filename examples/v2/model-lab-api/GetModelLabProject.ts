/**
 * Get a Model Lab project returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getModelLabProject"] = true;
const apiInstance = new v2.ModelLabAPIApi(configuration);

const params: v2.ModelLabAPIApiGetModelLabProjectRequest = {
  projectId: 2387,
};

apiInstance
  .getModelLabProject(params)
  .then((data: v2.ModelLabProjectResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
