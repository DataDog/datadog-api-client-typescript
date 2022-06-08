/**
 * Mute a host returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.HostsApi(configuration);

const params: v1.HostsApiMuteHostRequest = {
  body: {
    end: 1579098130,
    message: "Muting this host for a test!",
    override: false,
  },
  hostName: "host_name",
};

apiInstance
  .muteHost(params)
  .then((data: v1.HostMuteResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
