/**
 * Get a list of incidents returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listIncidents"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiListIncidentsRequest = {
  pageSize: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listIncidentsWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
