/**
 * Update monitor automatic investigation settings returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateMonitorAutomation"] = true;
const apiInstance = new v2.BitsAIApi(configuration);

const params: v2.BitsAIApiUpdateMonitorAutomationRequest = {
  body: {
    data: {
      attributes: {
        enabled: true,
      },
      type: "monitor_automation",
    },
  },
  monitorId: 9223372036854775807,
};

apiInstance
  .updateMonitorAutomation(params)
  .then((data: v2.MonitorAutomationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
