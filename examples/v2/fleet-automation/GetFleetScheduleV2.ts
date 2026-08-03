/**
 * Get a schedule by ID returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FleetAutomationApi(configuration);

// there is a valid "fleet_schedule" in the system
const SCHEDULE_ID = process.env.SCHEDULE_ID as string;

const params: v2.FleetAutomationApiGetFleetScheduleV2Request = {
  id: SCHEDULE_ID,
};

apiInstance
  .getFleetScheduleV2(params)
  .then((data: v2.FleetScheduleV2Response) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
