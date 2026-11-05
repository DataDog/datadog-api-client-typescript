/**
 * List AI Gateway budgets returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listAiGatewayBudgets"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

apiInstance
  .listAiGatewayBudgets()
  .then((data: v2.AiGatewayBudgetListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
