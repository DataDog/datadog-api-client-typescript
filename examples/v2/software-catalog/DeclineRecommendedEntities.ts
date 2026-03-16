/**
 * Decline recommended entities in bulk returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.declineRecommendedEntities"] = true;
const apiInstance = new v2.SoftwareCatalogApi(configuration);

const params: v2.SoftwareCatalogApiDeclineRecommendedEntitiesRequest = {
  body: [
    {
      id: "123abcdef",
    },
  ],
};

apiInstance
  .declineRecommendedEntities(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
