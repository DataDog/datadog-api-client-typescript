/**
 * Cancel experiment returns "The experiment was canceled and unlinked from its feature flag allocations." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.ExperimentsApi(configuration);

// there is a valid "experiment" in the system
const EXPERIMENT_DATA_ID = process.env.EXPERIMENT_DATA_ID as string;

const params: v2.ExperimentsApiCancelExperimentRequest = {
  body: {
    data: {
      type: "cancel-experiment-request",
      attributes: {
        reason: "Cancel the test experiment",
      },
    },
  },
  experimentId: EXPERIMENT_DATA_ID,
};

apiInstance
  .cancelExperiment(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
