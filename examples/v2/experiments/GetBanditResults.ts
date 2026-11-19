/**
 * Get bandit results returns "OK" response
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
configuration.unstableOperations["v2.getBanditResults"] = true;
const apiInstance = new v2.ExperimentsApi(configuration);

// there is a valid "bandit" in the system
const BANDIT_DATA_ID = process.env.BANDIT_DATA_ID as string;

const params: v2.ExperimentsApiGetBanditResultsRequest = {
  banditId: BANDIT_DATA_ID,
};

apiInstance
  .getBanditResults(params)
  .then((data: v2.ExperimentsBanditResultsV2DTO) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
