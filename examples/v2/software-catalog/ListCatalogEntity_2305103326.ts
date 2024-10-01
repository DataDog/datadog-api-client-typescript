/**
 * Get a list of entities returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SoftwareCatalogApi(configuration);

(async () => {
  try {
    for await (const item of apiInstance.listCatalogEntityWithPagination()) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
