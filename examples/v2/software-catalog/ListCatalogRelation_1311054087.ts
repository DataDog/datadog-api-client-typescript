/**
 * Get a list of entity relations returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SoftwareCatalogApi(configuration);

const params: v2.SoftwareCatalogApiListCatalogRelationRequest = {
  pageLimit: 20,
};

(async () => {
  try {
    for await (const item of apiInstance.listCatalogRelationWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
