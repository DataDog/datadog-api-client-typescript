/**
 * List team connections with filters returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listTeamConnections"] = true;
const apiInstance = new v2.TeamConnectionsApi(configuration);

const params: v2.TeamConnectionsApiListTeamConnectionsRequest = {
  pageSize: 10,
  filterSources: ["github"],
};

apiInstance
  .listTeamConnections(params)
  .then((data: v2.TeamConnectionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
