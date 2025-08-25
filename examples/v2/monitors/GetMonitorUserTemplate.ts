/**
 * Get a monitor user template returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getMonitorUserTemplate"] = true;
const apiInstance = new v2.MonitorsApi(configuration);

// there is a valid "monitor_user_template" in the system
const MONITOR_USER_TEMPLATE_DATA_ID = process.env
  .MONITOR_USER_TEMPLATE_DATA_ID as string;

const params: v2.MonitorsApiGetMonitorUserTemplateRequest = {
  templateId: MONITOR_USER_TEMPLATE_DATA_ID,
};

apiInstance
  .getMonitorUserTemplate(params)
  .then((data: v2.MonitorUserTemplateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
