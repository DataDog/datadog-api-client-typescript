/**
 * Get a RUM SDK configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getRUMSdkConfig"] = true;
const apiInstance = new v2.RUMRemoteConfigApi(configuration);

const params: v2.RUMRemoteConfigApiGetRUMSdkConfigRequest = {
  configId: "config_id",
};

apiInstance
  .getRUMSdkConfig(params)
  .then((data: v2.RUMSdkConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
