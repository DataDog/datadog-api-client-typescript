/**
 * List global orgs returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OrganizationsApi(configuration);

const params: v2.OrganizationsApiListGlobalOrgsRequest = {
  userHandle: "user@example.com",
};

(async () => {
  try {
    for await (const item of apiInstance.listGlobalOrgsWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
