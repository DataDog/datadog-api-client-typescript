/**
 * List all users returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

const params: v2.UsersApiListUsersRequest = {
  pageSize: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listUsersWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
