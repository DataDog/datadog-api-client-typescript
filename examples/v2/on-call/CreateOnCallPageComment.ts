/**
 * Create On-Call Page Comment returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.OnCallApi(configuration);

const params: v2.OnCallApiCreateOnCallPageCommentRequest = {
  body: {
    data: {
      attributes: {
        body: "Comment from the API client integration tests.",
      },
      id: "3c5f5b5e-3a3e-4f8c-9b1d-2f6a7e8d9c0b",
      type: "comments",
    },
  },
  pageId: "f63eb677-07ce-46ab-b2e0-80ca1ffe91bf",
};

apiInstance
  .createOnCallPageComment(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
