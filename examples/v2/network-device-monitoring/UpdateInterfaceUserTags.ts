/**
 * Update the tags for an interface returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.NetworkDeviceMonitoringApi(configuration);

const params: v2.NetworkDeviceMonitoringApiUpdateInterfaceUserTagsRequest = {
  body: {
    data: {
      attributes: {
        tags: ["tag:test", "tag:testbis"],
      },
      id: "example:1.2.3.4:1",
      type: "tags",
    },
  },
  interfaceId: "example:1.2.3.4:1",
};

apiInstance
  .updateInterfaceUserTags(params)
  .then((data: v2.ListInterfaceTagsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
