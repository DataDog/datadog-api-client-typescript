/**
 * Search for incidents returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.searchIncidents"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiSearchIncidentsRequest = {
  query: "state:(active OR stable OR resolved)",
};

apiInstance
  .searchIncidents(params)
  .then((data: v2.IncidentSearchResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
