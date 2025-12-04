/**
 * Get detailed information about an agent returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getFleetAgentInfo"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

const params: v2.FleetAutomationApiGetFleetAgentInfoRequest = {
  agentKey: "agent_key",
};

apiInstance
  .getFleetAgentInfo(params)
  .then((data: v2.FleetAgentInfoResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
