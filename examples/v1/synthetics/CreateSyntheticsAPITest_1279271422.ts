/**
 * Create an API test with multi subtype returns "OK - Returns the created test details." response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiCreateSyntheticsAPITestRequest = {
  body: {
    config: {
      configVariables: [
        {
          example: "content-type",
          name: "PROPERTY",
          pattern: "content-type",
          type: "text",
        },
      ],
      steps: [
        {
          allowFailure: true,
          assertions: [
            {
              operator: "is",
              type: "statusCode",
              target: 200,
            },
          ],
          isCritical: true,
          name: "request is sent",
          request: {
            method: "GET",
            timeout: 10,
            url: "https://datadoghq.com",
          },
          retry: {
            count: 5,
            interval: 1000,
          },
          subtype: "http",
        },
      ],
    },
    locations: ["aws:us-east-2"],
    message: "BDD test payload: synthetics_api_test_multi_step_payload.json",
    name: "Example-Create_an_API_test_with_multi_subtype_returns_OK_Returns_the_created_test_details_response",
    options: {
      acceptSelfSigned: false,
      allowInsecure: true,
      followRedirects: true,
      minFailureDuration: 10,
      minLocationFailed: 1,
      monitorName:
        "Example-Create_an_API_test_with_multi_subtype_returns_OK_Returns_the_created_test_details_response",
      monitorPriority: 5,
      retry: {
        count: 3,
        interval: 1000,
      },
      tickEvery: 60,
    },
    subtype: "multi",
    tags: ["testing:api"],
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
