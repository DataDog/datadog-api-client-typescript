/**
 * Patch a test suite returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiPatchTestSuiteRequest = {
  body: {
    data: {
      attributes: {
        jsonPatch: [
          {
            op: "add",
            path: "/name",
          },
        ],
      },
      type: "suites_json_patch",
    },
  },
  publicId: "123-abc-456",
};

apiInstance
  .patchTestSuite(params)
  .then((data: v2.SyntheticsSuiteResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
