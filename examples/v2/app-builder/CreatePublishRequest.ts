/**
 * Create Publish Request returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AppBuilderApi(configuration);

const params: v2.AppBuilderApiCreatePublishRequestRequest = {
  body: {
    data: {
      attributes: {
        description: "Adds new dashboard widgets and a few bug fixes.",
        title: "Release v1.2 to production",
      },
      type: "publishRequest",
    },
  },
  appId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .createPublishRequest(params)
  .then((data: v2.PublishAppResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
