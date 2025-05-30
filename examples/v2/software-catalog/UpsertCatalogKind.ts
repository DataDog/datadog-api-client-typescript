/**
 * Create or update kinds returns "ACCEPTED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SoftwareCatalogApi(configuration);

const params: v2.SoftwareCatalogApiUpsertCatalogKindRequest = {
  body: {
    kind: "my-job",
  },
};

apiInstance
  .upsertCatalogKind(params)
  .then((data: v2.UpsertCatalogKindResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
