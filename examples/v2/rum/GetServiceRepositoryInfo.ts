/**
 * Get service repository information returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getServiceRepositoryInfo"] = true;
const apiInstance = new v2.RUMApi(configuration);

const params: v2.RUMApiGetServiceRepositoryInfoRequest = {
  body: {
    data: {
      attributes: {
        debugId: "00000000-0000-4000-8000-000000000001",
      },
      type: "service_repository_info",
    },
  },
};

apiInstance
  .getServiceRepositoryInfo(params)
  .then((data: v2.ServiceRepositoryInfoResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
