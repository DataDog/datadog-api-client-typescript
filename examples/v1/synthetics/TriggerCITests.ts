/**
 * Trigger tests from CI/CD pipelines returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiTriggerCITestsRequest = {
  body: {
    tests: [
      {
        basicAuth: {
          password: "",
          type: "web",
          username: "",
        },
        deviceIds: ["laptop_large"],
        locations: ["aws:eu-west-3"],
        metadata: {
          ci: {
            pipeline: {},
            provider: {},
          },
          git: {},
        },
        publicId: "aaa-aaa-aaa",
        retry: {},
      },
    ],
  },
};

apiInstance
  .triggerCITests(params)
  .then((data: v1.SyntheticsTriggerCITestsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
