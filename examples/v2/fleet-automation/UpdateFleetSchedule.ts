/**
 * Update a schedule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateFleetSchedule"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

const params: v2.FleetAutomationApiUpdateFleetScheduleRequest = {
  body: {
    data: {
      attributes: {
        name: "Weekly Production Agent Updates",
        query: "env:prod AND service:web",
        rule: {
          daysOfWeek: ["Mon", "Wed", "Fri"],
          maintenanceWindowDuration: 1200,
          startMaintenanceWindow: "02:00",
          timezone: "America/New_York",
        },
        status: "active",
        versionToLatest: 0,
      },
      type: "schedule",
    },
  },
  id: "id",
};

apiInstance
  .updateFleetSchedule(params)
  .then((data: v2.FleetScheduleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
