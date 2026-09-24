/**
 * Delete a schedule returns "Schedule successfully deleted." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.deleteFleetSchedule"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

const params: v2.FleetAutomationApiDeleteFleetScheduleRequest = {
  id: "id",
};

apiInstance
  .deleteFleetSchedule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
