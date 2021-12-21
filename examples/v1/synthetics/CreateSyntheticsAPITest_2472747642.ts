/**
 * Create an API test with WEBSOCKET subtype returns "OK - Returns the created test details." response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params: v1.SyntheticsApiCreateSyntheticsAPITestRequest = {
  body: {
    config: {
      assertions: [
        {
          operator: "is",
          target: "message",
          type: "receivedMessage",
        },
        {
          operator: "lessThan",
          target: 2000,
          type: "responseTime",
        },
      ],
      configVariables: [],
      request: {
        url: "ws://datadoghq.com",
        message: "message",
      },
    },
    locations: ["aws:us-east-2"],
    message: "BDD test payload: synthetics_api_test_websocket_payload.json",
    name: "Example-Create_an_API_test_with_WEBSOCKET_subtype_returns_OK_Returns_the_created_test_details_response",
    options: {
      acceptSelfSigned: false,
      allowInsecure: true,
      followRedirects: true,
      minFailureDuration: 10,
      minLocationFailed: 1,
      monitorName:
        "Example-Create_an_API_test_with_WEBSOCKET_subtype_returns_OK_Returns_the_created_test_details_response",
      monitorPriority: 5,
      retry: {
        count: 3,
        interval: 10,
      },
      tickEvery: 60,
    },
    subtype: "websocket",
    tags: ["testing:api"],
    type: "api",
  },
};

apiInstance
  .createSyntheticsAPITest(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
