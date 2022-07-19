/**
 * Get an API test's latest results summaries returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiGetAPITestLatestResultsRequest = {
  publicId: "hwb-332-3xe",
};

apiInstance
  .getAPITestLatestResults(params)
  .then((data: v1.SyntheticsGetAPITestLatestResultsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
