/**
 * Get All Containers returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ContainersApi(configuration);

const params: v2.ContainersApiListContainersRequest = {
  pageSize: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listContainersWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
