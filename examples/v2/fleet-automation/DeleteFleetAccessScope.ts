/**
 * Delete a fleet access scope returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.deleteFleetAccessScope"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

// there is a valid "fleet_access_scope" in the system
const FLEET_ACCESS_SCOPE_ID = process.env.FLEET_ACCESS_SCOPE_ID as string;

const params: v2.FleetAutomationApiDeleteFleetAccessScopeRequest = {
  accessScopeId: FLEET_ACCESS_SCOPE_ID,
};

apiInstance
  .deleteFleetAccessScope(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
