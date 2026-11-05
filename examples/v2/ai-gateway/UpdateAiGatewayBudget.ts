/**
 * Update an AI Gateway budget returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.updateAiGatewayBudget"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiUpdateAiGatewayBudgetRequest = {
  body: {
    data: {
      attributes: {
        applyToCurrentPeriod: false,
        capacityMicrocents: 120000000,
        enabled: true,
        enforcement: "BLOCK",
        name: "Coding agents",
        reason: "Temporary capacity increase approved for an incident",
        trackExisting: false,
        warningThreshold: 0.8,
      },
      id: "11111111-1111-1111-1111-111111111111",
      type: "budgets",
    },
  },
  id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .updateAiGatewayBudget(params)
  .then((data: v2.AiGatewayBudgetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
