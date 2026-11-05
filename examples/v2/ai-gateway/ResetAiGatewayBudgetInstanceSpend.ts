/**
 * Reset a budget instance's spend returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.resetAiGatewayBudgetInstanceSpend"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiResetAiGatewayBudgetInstanceSpendRequest = {
  body: {
    data: {
      attributes: {
        instanceKey: "v1|7:user_id=36:22222222-2222-2222-2222-222222222222",
        reason: "Credit approved after incorrect usage attribution",
      },
      type: "budget-instances",
    },
  },
  id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .resetAiGatewayBudgetInstanceSpend(params)
  .then((data: v2.AiGatewayBudgetInstanceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
