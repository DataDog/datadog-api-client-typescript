/**
 * Get a browser test's latest results summaries returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiGetBrowserTestLatestResultsRequest = {
  publicId: "2yy-sem-mjh",
};

apiInstance
  .getBrowserTestLatestResults(params)
  .then((data: v1.SyntheticsGetBrowserTestLatestResultsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
