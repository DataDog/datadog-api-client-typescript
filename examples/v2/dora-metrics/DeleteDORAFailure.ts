/**
 * Delete an incident event returns "Accepted" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.DORAMetricsApi(configuration);

const params: v2.DORAMetricsApiDeleteDORAFailureRequest = {
  failureId: "failure_id",
};

apiInstance
  .deleteDORAFailure(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
