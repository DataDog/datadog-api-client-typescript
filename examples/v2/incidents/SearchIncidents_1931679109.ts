/**
 * Search for incidents returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.searchIncidents"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiSearchIncidentsRequest = {
  query: "state:(active OR stable OR resolved)",
  pageSize: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.searchIncidentsWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
