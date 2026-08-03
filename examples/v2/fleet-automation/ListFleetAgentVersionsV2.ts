/**
 * List available Datadog Agent versions returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FleetAutomationApi(configuration);

apiInstance
  .listFleetAgentVersionsV2()
  .then((data: v2.FleetAgentVersionsV2Response) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
