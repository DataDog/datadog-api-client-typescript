/**
 * Create an API test with UDP subtype returns "OK - Returns the created test details." response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiCreateSyntheticsAPITestRequest = {
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
        host: "https://datadoghq.com",
        message: "message",
        port: "443",
      },
    },
    locations: ["aws:us-east-2"],
    message: "BDD test payload: synthetics_api_test_udp_payload.json",
    name: "Example-Synthetic",
    options: {
      acceptSelfSigned: false,
      allowInsecure: true,
      followRedirects: true,
      minFailureDuration: 10,
      minLocationFailed: 1,
      monitorName: "Example-Synthetic",
      monitorPriority: 5,
      retry: {
        count: 3,
        interval: 10,
      },
      tickEvery: 60,
    },
    subtype: "udp",
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
