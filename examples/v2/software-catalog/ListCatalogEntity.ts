/**
 * Get a list of entities returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SoftwareCatalogApi(configuration);

apiInstance
  .listCatalogEntity()
  .then((data: v2.ListEntityCatalogResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
