/**
 * Update ownership settings for the org returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.postOwnershipSettings"] = true;
const apiInstance = new v2.CSMOwnershipApi(configuration);

const params: v2.CSMOwnershipApiPostOwnershipSettingsRequest = {
  body: {
    data: {
      attributes: {
        autoTag: true,
        confidenceLevel: "high",
      },
      type: "ownership_settings",
    },
  },
};

apiInstance
  .postOwnershipSettings(params)
  .then((data: v2.OwnershipSettingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
