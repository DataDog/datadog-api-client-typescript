/**
 * Update App Self-Service Status returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AppBuilderApi(configuration);

const params: v2.AppBuilderApiUpdateAppSelfServiceRequest = {
  body: {
    data: {
      attributes: {
        selfService: true,
      },
      type: "selfService",
    },
  },
  appId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .updateAppSelfService(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
