/**
 * Create an API GRPC test returns "OK - Returns the created test details." response
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
          target: 1,
          type: "grpcHealthcheckStatus",
        },
        {
          operator: "is",
          target: "proto target",
          type: "grpcProto",
        },
        {
          operator: "is",
          target: "123",
          property: "property",
          type: "grpcMetadata",
        },
      ],
      request: {
        host: "localhost",
        port: 50051,
        service: "Hello",
        method: "GET",
        message: "",
        metadata: {},
      },
    },
    locations: ["aws:us-east-2"],
    message: "BDD test payload: synthetics_api_grpc_test_payload.json",
    name: "Example-Synthetic",
    options: {
      minFailureDuration: 0,
      minLocationFailed: 1,
      monitorOptions: {
        renotifyInterval: 0,
      },
      monitorName: "Example-Synthetic",
      tickEvery: 60,
    },
    subtype: "grpc",
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
