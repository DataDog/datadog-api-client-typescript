/**
 * Get Host Tags returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.TagsApi(configuration);

const params: v1.TagsApiGetHostTagsRequest = {
  hostName: "host_name",
};

apiInstance
  .getHostTags(params)
  .then((data: v1.HostTags) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
