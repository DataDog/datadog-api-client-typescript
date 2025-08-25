/**
 * Search cases returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CaseManagementApi(configuration);

(async () => {
  try {
    for await (const item of apiInstance.searchCasesWithPagination()) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
