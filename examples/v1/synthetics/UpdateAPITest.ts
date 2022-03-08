/**
 * Edit an API test returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

// there is a valid "synthetics_api_test" in the system
let SYNTHETICS_API_TEST_PUBLIC_ID = process.env
  .SYNTHETICS_API_TEST_PUBLIC_ID as string;

let params: v1.SyntheticsApiUpdateAPITestRequest = {
  body: {
    config: {
      assertions: [
        {
          operator: "is",
          property: "{{ PROPERTY }}",
          target: "text/html",
          type: "header",
        },
        {
          operator: "lessThan",
          target: 2000,
          type: "responseTime",
        },
        {
          operator: "validatesJSONPath",
          target: {
            jsonPath: "topKey",
            operator: "isNot",
            targetValue: "0",
          },
          type: "body",
        },
      ],
      configVariables: [
        {
          example: "content-type",
          name: "PROPERTY",
          pattern: "content-type",
          type: "text",
        },
      ],
      request: {
        certificate: {
          cert: {
            filename: "cert-filename",
            updatedAt: "2020-10-16T09:23:24.857Z",
          },
          key: {
            filename: "key-filename",
            updatedAt: "2020-10-16T09:23:24.857Z",
          },
        },
        headers: {
          unique: "exampleeditanapitestreturnsokresponse",
        },
        method: "GET",
        timeout: 10,
        url: "https://datadoghq.com",
      },
    },
    locations: ["aws:us-east-2"],
    message: "BDD test payload: synthetics_api_test_payload.json",
    name: "Example-Edit_an_API_test_returns_OK_response-updated",
    options: {
      acceptSelfSigned: false,
      allowInsecure: true,
      followRedirects: true,
      minFailureDuration: 10,
      minLocationFailed: 1,
      monitorName: "Test-TestSyntheticsAPITestLifecycle-1623076664",
      monitorPriority: 5,
      retry: {
        count: 3,
        interval: 10,
      },
      tickEvery: 60,
    },
    status: "live",
    subtype: "http",
    tags: ["testing:api"],
    type: "api",
  },
  publicId: SYNTHETICS_API_TEST_PUBLIC_ID,
};

apiInstance
  .updateAPITest(params)
  .then((data: v1.SyntheticsAPITest) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
