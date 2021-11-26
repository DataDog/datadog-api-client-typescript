/**
 * Schedule a downtime returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

let params: v1.DowntimesApiCreateDowntimeRequest = {
  body: {
    message: "Example-Schedule_a_downtime_returns_OK_response",
    start: new Date().getTime(),
    timezone: "Etc/UTC",
    scope: ["test:examplescheduleadowntimereturnsokresponse"],
    recurrence: {
      type: "weeks",
      period: 1,
      weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      untilDate: new Date(new Date().getTime() + 21 * 86400).getTime(),
    },
  },
};

apiInstance
  .createDowntime(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
