/**
 * Refresh experiment results returns "Accepted" response
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

const params: v2.ExperimentsApiRefreshExperimentResultsRequest = {
  experimentId: "550e8400-e29b-41d4-a716-446655440000",
};

apiInstance
  .refreshExperimentResults(params)
  .then((data: v2.ExperimentsRefreshExperimentResultsV2DTO) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
