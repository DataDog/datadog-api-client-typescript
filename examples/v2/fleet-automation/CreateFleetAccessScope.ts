/**
 * Create a fleet access scope returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createFleetAccessScope"] = true;
const apiInstance = new v2.FleetAutomationApi(configuration);

const params: v2.FleetAutomationApiCreateFleetAccessScopeRequest = {
  body: {
    data: {
      type: "access_scope",
      attributes: {
        description: "Example-Fleet-Automation",
        query: "env:prod",
        features: {
          install: false,
          upgrade: true,
          configure: false,
        },
      },
    },
  },
};

apiInstance
  .createFleetAccessScope(params)
  .then((data: v2.FleetAccessScopeResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
