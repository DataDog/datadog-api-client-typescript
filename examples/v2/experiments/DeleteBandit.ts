/**
 * Delete bandit returns "The bandit was deleted." response
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
configuration.unstableOperations["v2.deleteBandit"] = true;
const apiInstance = new v2.ExperimentsApi(configuration);

// there is a valid "bandit" in the system
const BANDIT_DATA_ID = process.env.BANDIT_DATA_ID as string;

const params: v2.ExperimentsApiDeleteBanditRequest = {
  banditId: BANDIT_DATA_ID,
};

apiInstance
  .deleteBandit(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
