/**
 * Get automatic investigation settings for a monitor returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getMonitorAutomation"] = true;
const apiInstance = new v2.BitsAIApi(configuration);

const params: v2.BitsAIApiGetMonitorAutomationRequest = {
  monitorId: 9223372036854775807,
};

apiInstance
  .getMonitorAutomation(params)
  .then((data: v2.MonitorAutomationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
