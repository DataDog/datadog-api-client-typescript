/**
 * Create an API SSL test returns "OK - Returns the created test details." response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiCreateSyntheticsAPITestRequest = {
  body: {
    config: {
      assertions: [
        {
          operator: "isInMoreThan",
          target: 10,
          type: "certificate",
        },
      ],
      request: {
        host: "datadoghq.com",
        port: "{{ DATADOG_PORT }}",
      },
    },
    locations: ["aws:us-east-2"],
    message: "BDD test payload: synthetics_api_ssl_test_payload.json",
    name: "Example-Synthetic",
    options: {
      acceptSelfSigned: true,
      checkCertificateRevocation: true,
      tickEvery: 60,
    },
    subtype: "ssl",
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
