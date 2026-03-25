/**
 * Search cases returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiSearchCasesRequest = {
  pageSize: 2,
  filter: "status:closed",
};

(async () => {
  try {
    for await (const item of apiInstance.searchCasesWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
