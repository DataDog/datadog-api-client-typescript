/**
 * Delete an OpenAI Usage and Costs account returns "OK" response
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
  "v2.deleteOpenAIUsageAndCostsIntegrationAccount"
] = true;
const apiInstance = new v2.OpenAIUsageandCostsIntegrationApi(configuration);

const params: v2.OpenAIUsageandCostsIntegrationApiDeleteOpenAIUsageAndCostsIntegrationAccountRequest =
  {
    accountId: "account_id",
  };

apiInstance
  .deleteOpenAIUsageAndCostsIntegrationAccount(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
