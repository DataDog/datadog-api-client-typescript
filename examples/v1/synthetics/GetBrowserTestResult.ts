/**
 * Get a browser test result returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiGetBrowserTestResultRequest = {
  publicId: "public_id",
  resultId: "result_id",
};

apiInstance
  .getBrowserTestResult(params)
  .then((data: v1.SyntheticsBrowserTestResultFull) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
