/**
 * List models available from a provider integration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listAiGatewayProviderModels"] = true;
const apiInstance = new v2.AIGatewayApi(configuration);

const params: v2.AIGatewayApiListAiGatewayProviderModelsRequest = {
  integrationType: "integration_type",
  integrationAccountId: "integration_account_id",
};

apiInstance
  .listAiGatewayProviderModels(params)
  .then((data: v2.AiGatewayDiscoveredModelListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
