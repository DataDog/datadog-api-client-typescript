/**
 * Schedule a downtime returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

const params: v1.DowntimesApiCreateDowntimeRequest = {
  body: {
    message: "Example-Schedule_a_downtime_returns_OK_response",
    start: new Date().getTime() / 1000,
    timezone: "Etc/UTC",
    scope: ["test:examplescheduleadowntimereturnsokresponse"],
    recurrence: {
      type: "weeks",
      period: 1,
      weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      untilDate:
        new Date(new Date().getTime() / 1000 + 21 * 86400).getTime() / 1000,
    },
  },
};

apiInstance
  .createDowntime(params)
  .then((data: v1.Downtime) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
