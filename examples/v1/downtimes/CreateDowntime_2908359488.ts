/**
 * Schedule a downtime until date
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

const params: v1.DowntimesApiCreateDowntimeRequest = {
  body: {
    message: "Example-Downtime",
    recurrence: {
      period: 1,
      type: "weeks",
      untilDate: Math.round(
        new Date(new Date().getTime() + 21 * 86400 * 1000).getTime() / 1000
      ),
      weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    },
    scope: ["*"],
    start: Math.round(new Date().getTime() / 1000),
    end: Math.round(
      new Date(new Date().getTime() + 1 * 3600 * 1000).getTime() / 1000
    ),
    timezone: "Etc/UTC",
    muteFirstRecoveryNotification: true,
    monitorTags: ["tag0"],
    notifyEndStates: ["alert"],
    notifyEndTypes: ["canceled"],
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
