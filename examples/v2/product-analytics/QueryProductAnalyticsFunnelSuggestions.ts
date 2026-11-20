/**
 * Get feature suggestions returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.queryProductAnalyticsFunnelSuggestions"] =
  true;
const apiInstance = new v2.ProductAnalyticsApi(configuration);

const params: v2.ProductAnalyticsApiQueryProductAnalyticsFunnelSuggestionsRequest =
  {
    body: {
      data: {
        attributes: {
          applicationId: "40d8ca4b-2ac0-481f-b16e-f110699ecff6",
        },
        type: "funnel_suggestions_request",
      },
    },
  };

apiInstance
  .queryProductAnalyticsFunnelSuggestions(params)
  .then((data: v2.ProductAnalyticsFunnelSuggestionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
