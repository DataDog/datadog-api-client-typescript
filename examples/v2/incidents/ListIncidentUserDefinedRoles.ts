/**
 * List incident user-defined roles returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listIncidentUserDefinedRoles"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

apiInstance
  .listIncidentUserDefinedRoles()
  .then((data: v2.IncidentUserDefinedRolesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
