/**
 * Register a new App Key returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ActionConnectionApi(configuration);

const params: v2.ActionConnectionApiRegisterAppKeyRequest = {
  appKeyId: "b7feea52-994e-4714-a100-1bd9eff5aee1",
};

apiInstance
  .registerAppKey(params)
  .then((data: v2.RegisterAppKeyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
