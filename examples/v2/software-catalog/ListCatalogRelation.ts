/**
 * Get a list of entity relations returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SoftwareCatalogApi(configuration);

apiInstance
  .listCatalogRelation()
  .then((data: v2.ListRelationCatalogResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
