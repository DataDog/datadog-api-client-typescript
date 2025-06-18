/**
 * Unregister an App Key returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ActionConnectionApi(configuration);

const params: v2.ActionConnectionApiUnregisterAppKeyRequest = {
  appKeyId: "57cc69ae-9214-4ecc-8df8-43ecc1d92d99",
};

apiInstance
  .unregisterAppKey(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
