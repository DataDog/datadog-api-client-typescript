/**
 * Poll for test results returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiPollSyntheticsTestResultsRequest = {
  resultIds: "result_ids",
};

apiInstance
  .pollSyntheticsTestResults(params)
  .then((data: v2.SyntheticsPollTestResultsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
