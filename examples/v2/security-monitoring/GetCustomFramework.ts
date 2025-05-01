/**
 * Get a custom framework returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetCustomFrameworkRequest = {
  handle: "",
  version: "10",
};

apiInstance
  .getCustomFramework(params)
  .then((data: v2.GetCustomFrameworkResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
