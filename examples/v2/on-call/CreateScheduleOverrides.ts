/**
 * Create On-Call schedule overrides returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.OnCallApi(configuration);

// there is a valid "schedule" in the system
const SCHEDULE_DATA_ID = process.env.SCHEDULE_DATA_ID as string;

// there is a valid "user" in the system
const USER_DATA_ID = process.env.USER_DATA_ID as string;

const params: v2.OnCallApiCreateScheduleOverridesRequest = {
  body: {
    data: [
      {
        attributes: {
          end: new Date(new Date().getTime() + 1 * 86400 * 1000),
          start: new Date(),
        },
        relationships: {
          user: {
            data: {
              id: USER_DATA_ID,
              type: "users",
            },
          },
        },
        type: "overrides",
      },
    ],
  },
  scheduleId: SCHEDULE_DATA_ID,
};

apiInstance
  .createScheduleOverrides(params)
  .then((data: v2.OverrideCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
