/**
 * Get funnel step suggestions returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations[
  "v2.queryProductAnalyticsFunnelStepSuggestions"
] = true;
const apiInstance = new v2.ProductAnalyticsApi(configuration);

const params: v2.ProductAnalyticsApiQueryProductAnalyticsFunnelStepSuggestionsRequest =
  {
    body: {
      data: {
        attributes: {
          applicationId: "40d8ca4b-2ac0-481f-b16e-f110699ecff6",
          expression: "node_01->node_02",
          steps: {
            node_01: "@type:view @view.name:/checkout",
            node_02: "@type:action @action.name:pay",
          },
        },
        type: "funnel_suggestions_steps_request",
      },
    },
  };

apiInstance
  .queryProductAnalyticsFunnelStepSuggestions(params)
  .then((data: v2.ProductAnalyticsFunnelStepSuggestionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
