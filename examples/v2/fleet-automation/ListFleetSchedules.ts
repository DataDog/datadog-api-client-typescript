/**
 * List all schedules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listFleetSchedules"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

apiInstance
  .listFleetSchedules()
  .then((data: v2.FleetSchedulesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
