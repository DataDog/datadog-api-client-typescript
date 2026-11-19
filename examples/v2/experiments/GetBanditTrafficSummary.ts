/**
 * Get bandit traffic summary returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createBandit"] = true;
configuration.unstableOperations["v2.getBanditTrafficSummary"] = true;
const apiInstance = new v2.ExperimentsApi(configuration);

// there is a valid "bandit" in the system
const BANDIT_DATA_ID = process.env.BANDIT_DATA_ID as string;

const params: v2.ExperimentsApiGetBanditTrafficSummaryRequest = {
  banditId: BANDIT_DATA_ID,
};

apiInstance
  .getBanditTrafficSummary(params)
  .then((data: v2.ExperimentsBanditTrafficSummaryV2DTO) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
