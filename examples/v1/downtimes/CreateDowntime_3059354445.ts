/**
 * Schedule a downtime once a year
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

const params: v1.DowntimesApiCreateDowntimeRequest = {
  body: {
    message: "Example-Schedule_a_downtime_once_a_year",
    recurrence: {
      period: 1,
      type: "years",
    },
    scope: ["*"],
    start: Math.round(new Date().getTime() / 1000),
    end: Math.round(
      new Date(new Date().getTime() / 1000 + 1 * 3600).getTime() / 1000
    ),
    timezone: "Etc/UTC",
    muteFirstRecoveryNotification: true,
    monitorTags: ["tag0"],
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
