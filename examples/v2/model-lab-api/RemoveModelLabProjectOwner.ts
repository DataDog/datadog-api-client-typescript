/**
 * Remove an owner from a Model Lab project returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.removeModelLabProjectOwner"] = true;
const apiInstance = new v2.ModelLabAPIApi(configuration);

const params: v2.ModelLabAPIApiRemoveModelLabProjectOwnerRequest = {
  projectId: 1,
  userId: "00000000-0000-0000-0000-000000000001",
};

apiInstance
  .removeModelLabProjectOwner(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
