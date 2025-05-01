/**
 * Delete a custom framework returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiDeleteCustomFrameworkRequest = {
  handle: "",
  version: "10",
};

apiInstance
  .deleteCustomFramework(params)
  .then((data: v2.DeleteCustomFrameworkResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
