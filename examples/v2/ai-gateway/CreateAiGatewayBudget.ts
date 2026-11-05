/**
 * Create an AI Gateway budget returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createAiGatewayBudget"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiCreateAiGatewayBudgetRequest = {
  body: {
    data: {
      attributes: {
        capacityMicrocents: 100000000,
        enforcement: "BLOCK",
        name: "Coding agents",
        selector: [
          {
            dim: "user_id",
            perValue: true,
            values: ["11111111-1111-1111-1111-111111111111"],
          },
        ],
        tags: {
          model: "gpt-5.2-codex",
        },
        trackExisting: false,
        warningThreshold: 0.9,
        windowPolicy: "MONTHLY",
      },
      type: "budgets",
    },
  },
};

apiInstance
  .createAiGatewayBudget(params)
  .then((data: v2.AiGatewayBudgetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
