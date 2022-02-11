import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.HostsApi(configuration);

let params: v1.HostsApiUnmuteHostRequest = {
  // string | Name of the host to unmute.
  hostName: "host_name_example",
};

apiInstance
  .unmuteHost(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
