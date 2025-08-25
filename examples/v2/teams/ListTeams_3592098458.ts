/**
 * Get all teams returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

const params: v2.TeamsApiListTeamsRequest = {
  pageSize: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listTeamsWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
