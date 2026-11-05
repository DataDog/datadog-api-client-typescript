/**
 * Override a budget instance's capacity returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.overrideAiGatewayBudgetInstanceCapacity"] =
  true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiOverrideAiGatewayBudgetInstanceCapacityRequest = {
  body: {
    data: {
      attributes: {
        capacityMicrocents: 250000000,
        instanceKey: "v1|7:user_id=36:22222222-2222-2222-2222-222222222222",
        reason: "Temporary increase for a launch week",
      },
      type: "budget-instances",
    },
  },
  id: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .overrideAiGatewayBudgetInstanceCapacity(params)
  .then((data: v2.AiGatewayBudgetInstanceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
