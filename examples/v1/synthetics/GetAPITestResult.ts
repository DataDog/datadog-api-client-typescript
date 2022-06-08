/**
 * Get an API test result returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiGetAPITestResultRequest = {
  publicId: "public_id",
  resultId: "result_id",
};

apiInstance
  .getAPITestResult(params)
  .then((data: v1.SyntheticsAPITestResultFull) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
