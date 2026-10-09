/**
 * List On-Call schedule overrides returns "OK" response
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

const params: v2.OnCallApiListScheduleOverridesRequest = {
  scheduleId: SCHEDULE_DATA_ID,
  filterStart: new Date(new Date().getTime() + -1 * 86400 * 1000),
  filterEnd: new Date(new Date().getTime() + 2 * 86400 * 1000),
};

apiInstance
  .listScheduleOverrides(params)
  .then((data: v2.Overrides) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
