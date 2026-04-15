/**
 * List all fleet tracers returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listFleetTracers"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

apiInstance
  .listFleetTracers()
  .then((data: v2.FleetTracersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
