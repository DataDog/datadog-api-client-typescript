/**
 * Get version history of a test returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiListSyntheticsTestVersionsRequest = {
  publicId: "public_id",
};

apiInstance
  .listSyntheticsTestVersions(params)
  .then((data: v2.SyntheticsTestVersionHistoryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
