/**
 * Patch experiment returns "OK" response
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

const params: v2.ExperimentsApiPatchExperimentRequest = {
  body: {
    data: {
      type: "experiments",
      attributes: {
        name: "ex-14bb9543f523edde updated",
      },
    },
  },
  experimentId: EXPERIMENT_DATA_ID,
};

apiInstance
  .patchExperiment(params)
  .then((data: v2.ExperimentsPatchExperimentV2Response) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
