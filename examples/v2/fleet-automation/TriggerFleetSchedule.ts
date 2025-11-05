/**
 * Trigger a schedule deployment returns "CREATED - Deployment successfully created and started." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.triggerFleetSchedule"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

const params: v2.FleetAutomationApiTriggerFleetScheduleRequest = {
  id: "id",
};

apiInstance
  .triggerFleetSchedule(params)
  .then((data: v2.FleetDeploymentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
