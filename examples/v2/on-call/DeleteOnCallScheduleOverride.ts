/**
 * Delete an override returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallApi(configuration);

// there is a valid "schedule" in the system
const SCHEDULE_DATA_ID = process.env.SCHEDULE_DATA_ID as string;

// there is a valid "override" in the system
const OVERRIDE_DATA_0_ID = process.env.OVERRIDE_DATA_0_ID as string;

const params: v2.OnCallApiDeleteOnCallScheduleOverrideRequest = {
  scheduleId: SCHEDULE_DATA_ID,
  overrideId: OVERRIDE_DATA_0_ID,
};

apiInstance
  .deleteOnCallScheduleOverride(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
