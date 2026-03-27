/**
 * Get parent tests for a subtest returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiGetApiMultistepSubtestParentsRequest = {
  publicId: "public_id",
};

apiInstance
  .getApiMultistepSubtestParents(params)
  .then((data: v2.SyntheticsApiMultistepParentTestsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
