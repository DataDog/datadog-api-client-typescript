/**
 * Get team hierarchy links returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TeamsApi(configuration);

(async () => {
  try {
    for await (const item of apiInstance.listTeamHierarchyLinksWithPagination()) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
