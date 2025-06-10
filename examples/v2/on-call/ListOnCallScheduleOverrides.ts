/**
 * Get a list of all overrides for a schedule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallApi(configuration);

// there is a valid "schedule" in the system
const SCHEDULE_DATA_ID = process.env.SCHEDULE_DATA_ID as string;

const params: v2.OnCallApiListOnCallScheduleOverridesRequest = {
  scheduleId: SCHEDULE_DATA_ID,
  filterStart: new Date(new Date().getTime() + -1 * 3600 * 1000),
  filterEnd: new Date(new Date().getTime() + 1 * 3600 * 1000),
};

apiInstance
  .listOnCallScheduleOverrides(params)
  .then((data: v2.OverridesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
