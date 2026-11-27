/**
 * Get an OpenAI Usage and Costs account returns "OK" response
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
  "v2.getOpenAIUsageAndCostsIntegrationAccount"
] = true;
const apiInstance = new v2.OpenAIUsageAndCostsIntegrationApi(configuration);

const params: v2.OpenAIUsageAndCostsIntegrationApiGetOpenAIUsageAndCostsIntegrationAccountRequest =
  {
    accountId: "account_id",
  };

apiInstance
  .getOpenAIUsageAndCostsIntegrationAccount(params)
  .then((data: v2.OpenAIUsageAndCostsIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
