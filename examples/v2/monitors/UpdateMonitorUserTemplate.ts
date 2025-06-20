/**
 * Update a monitor user template to a new version returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateMonitorUserTemplate"] = true;
const apiInstance = new v2.MonitorsApi(configuration);

// there is a valid "monitor_user_template" in the system
const MONITOR_USER_TEMPLATE_DATA_ID = process.env
  .MONITOR_USER_TEMPLATE_DATA_ID as string;

const params: v2.MonitorsApiUpdateMonitorUserTemplateRequest = {
  body: {
    data: {
      attributes: {
        description: "A description.",
        monitorDefinition: {
          message: "A msg.",
          name: "A name example-monitor",
          query: "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100",
          type: "query alert",
        },
        tags: ["integration:Azure"],
        templateVariables: [
          {
            availableValues: ["value1", "value2"],
            defaults: ["defaultValue"],
            name: "regionName",
            tagKey: "datacenter",
          },
        ],
        title: "Postgres DB example-monitor",
      },
      id: MONITOR_USER_TEMPLATE_DATA_ID,
      type: "monitor-user-template",
    },
  },
  templateId: MONITOR_USER_TEMPLATE_DATA_ID,
};

apiInstance
  .updateMonitorUserTemplate(params)
  .then((data: v2.MonitorUserTemplateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
