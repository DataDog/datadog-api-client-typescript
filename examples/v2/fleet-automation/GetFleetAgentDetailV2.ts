/**
 * Get detailed information about an agent returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.FleetAutomationApi(configuration);

const params: v2.FleetAutomationApiGetFleetAgentDetailV2Request = {
  agentKey: "a1b2c3d4e5f67890a1b2c3d4e5f67890",
};

apiInstance
  .getFleetAgentDetailV2(params)
  .then((data: v2.FleetAgentDetailV2Response) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
