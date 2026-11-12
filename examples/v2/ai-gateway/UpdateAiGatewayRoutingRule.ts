/**
 * Update an AI Gateway routing rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateAiGatewayRoutingRule"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiUpdateAiGatewayRoutingRuleRequest = {
  body: {
    data: {
      attributes: {
        expectedUpdatedAt: new Date(2026, 8, 24, 12, 0, 0, 0),
        removedTargetIds: [901],
        tiers: [
          {
            classifier: {
              confidenceThreshold: 0.5,
              context: "Requests come from engineers.",
              model: "gpt-6-luna",
              provider: "openai",
            },
            ordering: "configured",
            targets: [
              {
                _default: false,
                id: 901,
                model: "gpt-5.2-codex",
                modelId: 101,
                provider: "prod-us",
                reasoningLevel: "medium",
                rubric: "Short factual questions.",
                slug: "coding-fallback",
                type: "model",
                weight: 70,
              },
            ],
          },
        ],
      },
      id: "coding",
      type: "routing-rules",
    },
  },
  slug: "slug",
};

apiInstance
  .updateAiGatewayRoutingRule(params)
  .then((data: v2.AiGatewayRoutingRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
