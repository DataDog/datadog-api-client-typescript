/**
 * Get all service definitions returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ServiceDefinitionApi(configuration);

const params: v2.ServiceDefinitionApiListServiceDefinitionsRequest = {
  pageSize: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listServiceDefinitionsWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
