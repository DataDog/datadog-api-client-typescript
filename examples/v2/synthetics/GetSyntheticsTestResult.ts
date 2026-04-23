/**
 * Get a test result returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiGetSyntheticsTestResultRequest = {
  publicId: "public_id",
  resultId: "result_id",
};

apiInstance
  .getSyntheticsTestResult(params)
  .then((data: v2.SyntheticsTestResultResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
