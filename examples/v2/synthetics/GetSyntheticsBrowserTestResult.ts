/**
 * Get a browser test result returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiGetSyntheticsBrowserTestResultRequest = {
  publicId: "public_id",
  resultId: "result_id",
};

apiInstance
  .getSyntheticsBrowserTestResult(params)
  .then((data: v2.SyntheticsTestResultResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
