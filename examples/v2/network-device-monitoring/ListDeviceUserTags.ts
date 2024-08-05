/**
 * Get the list of tags for a device returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.NetworkDeviceMonitoringApi(configuration);

const params: v2.NetworkDeviceMonitoringApiListDeviceUserTagsRequest = {
  deviceId: "default_device",
};

apiInstance
  .listDeviceUserTags(params)
  .then((data: v2.ListTagsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
