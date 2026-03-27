/**
 * Get a specific version of a test returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiGetSyntheticsTestVersionRequest = {
  publicId: "public_id",
  versionNumber: 9223372036854775807,
};

apiInstance
  .getSyntheticsTestVersion(params)
  .then((data: v2.SyntheticsTestVersionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
