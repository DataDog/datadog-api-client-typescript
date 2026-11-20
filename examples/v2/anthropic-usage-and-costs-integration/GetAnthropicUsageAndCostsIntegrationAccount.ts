/**
 * Get an Anthropic Usage and Costs account returns "OK" response
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
  "v2.getAnthropicUsageAndCostsIntegrationAccount"
] = true;
const apiInstance = new v2.AnthropicUsageAndCostsIntegrationApi(configuration);

const params: v2.AnthropicUsageAndCostsIntegrationApiGetAnthropicUsageAndCostsIntegrationAccountRequest =
  {
    accountId: "account_id",
  };

apiInstance
  .getAnthropicUsageAndCostsIntegrationAccount(params)
  .then((data: v2.AnthropicUsageAndCostsIntegrationAccountResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
