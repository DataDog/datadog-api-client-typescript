/**
 * Validate a monitor user template returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.validateMonitorUserTemplate"] = true;
const apiInstance = new v2.MonitorsApi(configuration);

const params: v2.MonitorsApiValidateMonitorUserTemplateRequest = {
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
      type: "monitor-user-template",
    },
  },
};

apiInstance
  .validateMonitorUserTemplate(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
