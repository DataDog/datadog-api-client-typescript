/**
 * Get scheduled on-call user returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallApi(configuration);

// there is a valid "schedule" in the system
const SCHEDULE_DATA_ID = process.env.SCHEDULE_DATA_ID as string;

const params: v2.OnCallApiGetScheduleOnCallUserRequest = {
  scheduleId: SCHEDULE_DATA_ID,
};

apiInstance
  .getScheduleOnCallUser(params)
  .then((data: v2.Shift) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
