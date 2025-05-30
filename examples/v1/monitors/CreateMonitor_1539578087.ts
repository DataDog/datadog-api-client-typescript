/**
 * Create a metric monitor with a custom schedule returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

const params: v1.MonitorsApiCreateMonitorRequest = {
  body: {
    message: "some message Notify: @hipchat-channel",
    name: "Example-Monitor",
    query: "avg(current_1mo):avg:system.load.5{*} > 0.5",
    tags: [],
    options: {
      thresholds: {
        critical: 0.5,
      },
      notifyAudit: false,
      includeTags: false,
      schedulingOptions: {
        evaluationWindow: {
          dayStarts: "04:00",
          monthStarts: 1,
        },
        customSchedule: {
          recurrences: [
            {
              rrule: "FREQ=DAILY;INTERVAL=1",
              timezone: "America/Los_Angeles",
              start: "2024-10-26T09:13:00",
            },
          ],
        },
      },
    },
    type: "query alert",
    draftStatus: "published",
  },
};

apiInstance
  .createMonitor(params)
  .then((data: v1.Monitor) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
