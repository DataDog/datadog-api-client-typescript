/**
 * Get a fleet access scope returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getFleetAccessScope"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

// there is a valid "fleet_access_scope" in the system
const FLEET_ACCESS_SCOPE_ID = process.env.FLEET_ACCESS_SCOPE_ID as string;

const params: v2.FleetAutomationApiGetFleetAccessScopeRequest = {
  accessScopeId: FLEET_ACCESS_SCOPE_ID,
};

apiInstance
  .getFleetAccessScope(params)
  .then((data: v2.FleetAccessScopeResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
