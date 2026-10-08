/**
 * Disable automatic investigations for a monitor
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

// there is a valid "monitor" in the system
const MONITOR_ID = parseInt(process.env.MONITOR_ID as string);

const params: v2.BitsAIApiUpdateMonitorAutomationRequest = {
  body: {
    data: {
      type: "monitor_automation",
      attributes: {
        enabled: false,
      },
    },
  },
  monitorId: MONITOR_ID,
};

apiInstance
  .updateMonitorAutomation(params)
  .then((data: v2.MonitorAutomationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
