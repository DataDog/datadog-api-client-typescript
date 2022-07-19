/**
 * Get a browser test result returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiGetBrowserTestResultRequest = {
  publicId: "2yy-sem-mjh",
  resultId: "5671719892074090418",
};

apiInstance
  .getBrowserTestResult(params)
  .then((data: v1.SyntheticsBrowserTestResultFull) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
