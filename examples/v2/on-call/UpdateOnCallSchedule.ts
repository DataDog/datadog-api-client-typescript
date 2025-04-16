/**
 * Update on-call schedule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallApi(configuration);

// there is a valid "schedule" in the system
const SCHEDULE_DATA_ID = process.env.SCHEDULE_DATA_ID as string;
const SCHEDULE_DATA_RELATIONSHIPS_LAYERS_DATA_0_ID = process.env
  .SCHEDULE_DATA_RELATIONSHIPS_LAYERS_DATA_0_ID as string;

// there is a valid "user" in the system
const USER_DATA_ID = process.env.USER_DATA_ID as string;

// there is a valid "dd_team" in the system
const DD_TEAM_DATA_ID = process.env.DD_TEAM_DATA_ID as string;

const params: v2.OnCallApiUpdateOnCallScheduleRequest = {
  body: {
    data: {
      id: SCHEDULE_DATA_ID,
      attributes: {
        layers: [
          {
            id: SCHEDULE_DATA_RELATIONSHIPS_LAYERS_DATA_0_ID,
            effectiveDate: new Date(new Date().getTime() + -10 * 86400 * 1000),
            endDate: new Date(new Date().getTime() + 10 * 86400 * 1000),
            interval: {
              seconds: 300,
            },
            members: [
              {
                user: {
                  id: USER_DATA_ID,
                },
              },
            ],
            name: "Layer 1",
            restrictions: [
              {
                endDay: "friday",
                endTime: "17:00:00",
                startDay: "monday",
                startTime: "09:00:00",
              },
            ],
            rotationStart: new Date(new Date().getTime() + -5 * 86400 * 1000),
          },
        ],
        name: "Example-On-Call",
        tags: ["tag1", "tag2", "tag3"],
        timeZone: "America/New_York",
      },
      relationships: {
        teams: {
          data: [
            {
              id: DD_TEAM_DATA_ID,
              type: "teams",
            },
          ],
        },
      },
      type: "schedules",
    },
  },
  scheduleId: SCHEDULE_DATA_ID,
};

apiInstance
  .updateOnCallSchedule(params)
  .then((data: v2.Schedule) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
