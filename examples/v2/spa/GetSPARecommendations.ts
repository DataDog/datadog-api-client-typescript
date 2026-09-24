/**
 * Get SPA Recommendations returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.getSPARecommendations"] = true;
const apiInstance = new v2.SpaApi(configuration);

const params: v2.SpaApiGetSPARecommendationsRequest = {
  service: "service",
};

apiInstance
  .getSPARecommendations(params)
  .then((data: v2.RecommendationDocument) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
