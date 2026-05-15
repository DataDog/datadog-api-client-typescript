/**
 * Name App Version returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AppBuilderApi(configuration);

const params: v2.AppBuilderApiUpdateAppVersionNameRequest = {
  body: {
    data: {
      attributes: {
        name: "v1.2.0 - bug fix release",
      },
      type: "versionNames",
    },
  },
  appId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  version: "version",
};

apiInstance
  .updateAppVersionName(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
