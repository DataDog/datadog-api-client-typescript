/**
 * Name App Version returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AppBuilderApi(configuration);

// there is a valid "app" in the system
const APP_DATA_ID = process.env.APP_DATA_ID as string;

const params: v2.AppBuilderApiUpdateAppVersionNameRequest = {
  body: {
    data: {
      attributes: {
        name: "v1.2.0 - bug fix release",
      },
      type: "versionNames",
    },
  },
  appId: APP_DATA_ID,
  version: "latest",
};

apiInstance
  .updateAppVersionName(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
