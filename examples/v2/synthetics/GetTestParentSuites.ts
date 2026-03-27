/**
 * Get parent suites for a test returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiGetTestParentSuitesRequest = {
  publicId: "public_id",
};

apiInstance
  .getTestParentSuites(params)
  .then((data: v2.SyntheticsTestParentSuitesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
