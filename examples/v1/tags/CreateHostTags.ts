/**
 * Add tags to a host returns "Created" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.TagsApi(configuration);

const params: v1.TagsApiCreateHostTagsRequest = {
  body: {
    host: "test.host",
    tags: ["environment:production"],
  },
  hostName: "host_name",
};

apiInstance
  .createHostTags(params)
  .then((data: v1.HostTags) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
