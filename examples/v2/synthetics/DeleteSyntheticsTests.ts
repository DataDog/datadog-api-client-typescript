/**
 * Bulk delete tests returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiDeleteSyntheticsTestsRequest = {
  body: {
    data: {
      attributes: {
        publicIds: [""],
      },
      type: "delete_tests_request",
    },
  },
};

apiInstance
  .deleteSyntheticsTests(params)
  .then((data: v2.DeletedTestsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
