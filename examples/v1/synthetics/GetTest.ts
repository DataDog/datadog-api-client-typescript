/**
 * Get a test configuration returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiGetTestRequest = {
  publicId: "public_id",
};

apiInstance
  .getTest(params)
  .then((data: v1.SyntheticsTestDetailsWithoutSteps) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
