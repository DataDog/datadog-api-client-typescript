/**
 * Update the tags for a device returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.NetworkDeviceMonitoringApi(configuration);

const params: v2.NetworkDeviceMonitoringApiUpdateDeviceUserTagsRequest = {
  body: {
    data: {
      attributes: {
        tags: ["tag:test", "tag:testbis"],
      },
      id: "default_device",
      type: "tags",
    },
  },
  deviceId: "default_device",
};

apiInstance
  .updateDeviceUserTags(params)
  .then((data: v2.ListTagsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
