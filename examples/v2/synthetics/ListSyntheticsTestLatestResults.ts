/**
 * Get a test's latest results returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiListSyntheticsTestLatestResultsRequest = {
  publicId: "public_id",
};

apiInstance
  .listSyntheticsTestLatestResults(params)
  .then((data: v2.SyntheticsTestLatestResultsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
