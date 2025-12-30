/**
 * Create a multistep test with subtest returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

// there is a valid "synthetics_api_test" in the system
const SYNTHETICS_API_TEST_PUBLIC_ID = process.env
  .SYNTHETICS_API_TEST_PUBLIC_ID as string;

const params: v1.SyntheticsApiCreateSyntheticsAPITestRequest = {
  body: {
    config: {
      steps: [
        {
          assertions: [
            {
              operator: "is",
              type: "statusCode",
              target: 200,
            },
          ],
          name: "request is sent",
          request: {
            url: "https://httpbin.org/status/200",
            method: "GET",
            basicAuth: {
              password: "password",
              username: "username",
            },
          },
          subtype: "http",
        },
        {
          subtype: "playSubTest",
          subtestPublicId: SYNTHETICS_API_TEST_PUBLIC_ID,
          name: "subtest step",
        },
      ],
    },
    locations: ["aws:us-east-2"],
    message:
      "BDD test payload: synthetics_api_test_multi_step_with_subtest.json",
    name: "Example-Synthetic",
    options: {
      tickEvery: 60,
    },
    subtype: "multi",
    type: "api",
  },
};

apiInstance
  .createSyntheticsAPITest(params)
  .then((data: v1.SyntheticsAPITest) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
