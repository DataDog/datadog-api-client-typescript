/**
 * List all fleet access scopes returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listFleetAccessScopes"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

apiInstance
  .listFleetAccessScopes()
  .then((data: v2.FleetAccessScopesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
