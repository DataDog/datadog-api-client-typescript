/**
 * List tracers for a specific agent returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listFleetAgentTracers"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

const params: v2.FleetAutomationApiListFleetAgentTracersRequest = {
  agentKey: "agent_key",
};

apiInstance
  .listFleetAgentTracers(params)
  .then((data: v2.FleetTracersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
