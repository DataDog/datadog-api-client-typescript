/**
 * Schedule a downtime returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

const params: v1.DowntimesApiCreateDowntimeRequest = {
  body: {
    message: "Example-Downtime",
    start: Math.round(new Date().getTime() / 1000),
    end: Math.round(
      new Date(new Date().getTime() + 1 * 3600 * 1000).getTime() / 1000
    ),
    timezone: "Etc/UTC",
    scope: ["test:exampledowntime"],
    recurrence: {
      type: "weeks",
      period: 1,
      weekDays: ["Mon", "Tue", "Wed", "Thu", "Fri"],
      untilDate: Math.round(
        new Date(new Date().getTime() + 21 * 86400 * 1000).getTime() / 1000
      ),
    },
    notifyEndStates: ["alert", "no data", "warn"],
    notifyEndTypes: ["canceled", "expired"],
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
