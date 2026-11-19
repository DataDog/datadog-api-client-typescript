/**
 * Refresh bandit returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.refreshBandit"] = true;
const apiInstance = new v2.ExperimentsApi(configuration);

const params: v2.ExperimentsApiRefreshBanditRequest = {
  banditId: "4b1f3c2e-8d5a-4f6b-9c7e-1a2b3c4d5e6f",
};

apiInstance
  .refreshBandit(params)
  .then((data: v2.ExperimentsBanditRefreshV2DTO) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
