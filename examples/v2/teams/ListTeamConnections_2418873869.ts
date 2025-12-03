/**
 * List team connections returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listTeamConnections"] = true;
const apiInstance = new v2.TeamsApi(configuration);

(async () => {
  try {
    for await (const item of apiInstance.listTeamConnectionsWithPagination()) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
