/**
 * Get SPA recommendations v2 returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getSPARecommendationsV2"] = true;
const apiInstance = new v2.SpaApi(configuration);

const params: v2.SpaApiGetSPARecommendationsV2Request = {
  body: {
    data: {
      attributes: {
        arguments: [""],
      },
      type: "recommendation_v2_request",
    },
  },
  service: "service",
};

apiInstance
  .getSPARecommendationsV2(params)
  .then((data: v2.RecommendationDocument) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
