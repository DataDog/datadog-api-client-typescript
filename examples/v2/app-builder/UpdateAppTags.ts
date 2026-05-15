/**
 * Update App Tags returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AppBuilderApi(configuration);

const params: v2.AppBuilderApiUpdateAppTagsRequest = {
  body: {
    data: {
      attributes: {
        tags: ["team:platform", "service:ops"],
      },
      type: "tags",
    },
  },
  appId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .updateAppTags(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
