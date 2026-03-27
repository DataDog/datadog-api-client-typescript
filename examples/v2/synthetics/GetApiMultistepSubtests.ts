/**
 * Get available subtests for a multistep test returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiGetApiMultistepSubtestsRequest = {
  publicId: "public_id",
};

apiInstance
  .getApiMultistepSubtests(params)
  .then((data: v2.SyntheticsApiMultistepSubtestsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
