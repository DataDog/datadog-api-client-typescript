/**
 * Get the list of all Synthetic tests returns "OK - Returns the list of all Synthetic tests." response with pagination
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiListTestsRequest = {
  pageSize: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listTestsWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
