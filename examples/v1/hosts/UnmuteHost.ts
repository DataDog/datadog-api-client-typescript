/**
 * Unmute a host returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.HostsApi(configuration);

const params: v1.HostsApiUnmuteHostRequest = {
  hostName: "host_name",
};

apiInstance
  .unmuteHost(params)
  .then((data: v1.HostMuteResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
