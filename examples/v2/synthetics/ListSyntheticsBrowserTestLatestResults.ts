/**
 * Get a browser test's latest results returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiListSyntheticsBrowserTestLatestResultsRequest = {
  publicId: "public_id",
};

apiInstance
  .listSyntheticsBrowserTestLatestResults(params)
  .then((data: v2.SyntheticsTestLatestResultsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
