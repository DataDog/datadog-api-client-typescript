/**
 * Update App Protection Level returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AppBuilderApi(configuration);

const params: v2.AppBuilderApiUpdateProtectionLevelRequest = {
  body: {
    data: {
      attributes: {
        protectionLevel: "approval_required",
      },
      type: "protectionLevel",
    },
  },
  appId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .updateProtectionLevel(params)
  .then((data: v2.UpdateAppResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
