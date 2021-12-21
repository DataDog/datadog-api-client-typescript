/**
 * Schedule a downtime until date
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

let params: v1.DowntimesApiCreateDowntimeRequest = {
  body: {
    message: "Example-Schedule_a_downtime_until_date",
    recurrence: {
      period: 1,
      type: "weeks",
      untilDate: new Date(new Date().getTime() + 21 * 86400).getTime(),
      weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
    scope: ["*"],
    start: new Date().getTime(),
    end: new Date(new Date().getTime() + 1 * 3600).getTime(),
    timezone: "Etc/UTC",
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
