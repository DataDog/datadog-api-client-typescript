/**
 * Create On-Call Page returns "OK." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallPagingApi(configuration);

const params: v2.OnCallPagingApiCreateOnCallPageRequest = {
  body: {
    data: {
      attributes: {
        description: "Page details.",
        tags: ["service:test"],
        target: {
          identifier: "my-team",
          type: "team_handle",
        },
        title: "Page title",
        urgency: "low",
      },
      type: "pages",
    },
  },
};

apiInstance
  .createOnCallPage(params)
  .then((data: v2.CreatePageResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
