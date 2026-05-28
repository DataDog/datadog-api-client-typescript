/**
 * Trigger a Bits AI SRE investigation returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.triggerInvestigation"] = true;
const apiInstance = new v2.BitsAISREApi(configuration);

const params: v2.BitsAISREApiTriggerInvestigationRequest = {
  body: {
    data: {
      attributes: {
        trigger: {
          monitorAlertTrigger: {
            eventId: "1234567890123456789",
            eventTs: 1700000000000,
            monitorId: 12345678,
          },
          type: "monitor_alert_trigger",
        },
      },
      type: "trigger_investigation_request",
    },
  },
};

apiInstance
  .triggerInvestigation(params)
  .then((data: v2.TriggerInvestigationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
