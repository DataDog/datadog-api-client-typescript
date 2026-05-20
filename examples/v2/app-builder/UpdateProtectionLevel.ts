/**
 * Update App Protection Level returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AppBuilderApi(configuration);

// there is a valid "app" in the system
const APP_DATA_ID = process.env.APP_DATA_ID as string;

const params: v2.AppBuilderApiUpdateProtectionLevelRequest = {
  body: {
    data: {
      attributes: {
        protectionLevel: "approval_required",
      },
      type: "protectionLevel",
    },
  },
  appId: APP_DATA_ID,
};

apiInstance
  .updateProtectionLevel(params)
  .then((data: v2.UpdateAppResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
