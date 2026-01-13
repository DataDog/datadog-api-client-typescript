/**
 * Get SPA Recommendations with a shard parameter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getSPARecommendationsWithShard"] = true;
const apiInstance = new v2.SpaApi(configuration);

const params: v2.SpaApiGetSPARecommendationsWithShardRequest = {
  shard: "shard",
  service: "service",
};

apiInstance
  .getSPARecommendationsWithShard(params)
  .then((data: v2.RecommendationDocument) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
