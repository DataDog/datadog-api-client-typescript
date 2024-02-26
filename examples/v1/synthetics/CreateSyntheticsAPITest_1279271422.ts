/**
 * Create an API test with multi subtype returns "OK - Returns the created test details." response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
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
          extractedValues: [
            {
              field: "server",
              name: "EXTRACTED_VALUE",
              parser: {
                type: "raw",
              },
              type: "http_header",
              secure: true,
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
        {
          name: "GRPC CALL",
          subtype: "grpc",
          extractedValues: [],
          allowFailure: false,
          isCritical: true,
          retry: {
            count: 0,
            interval: 300,
          },
          assertions: [
            {
              operator: "lessThan",
              type: "responseTime",
              target: 1000,
            },
          ],
          request: {
            host: "grpcbin.test.k6.io",
            port: 9000,
            service: "grpcbin.GRPCBin",
            method: "Index",
            message: "{}",
            compressedJsonDescriptor:
              "eJy1lU1z2yAQhv+Lzj74I3ETH506bQ7OZOSm1w4Wa4epBARQppqM/3v5koCJJdvtxCdW77vPssCO3zMKUgHOFu/ZXvBiS6hZho/f8qe7pftYgXphWJrlA8XwxywEvNba+6PhkC2yVcVVswYp0R6ykRYlZ1SCV21SDrxsssPIeS9FJKqGfK2rqnmmSBwhWa2XlKgtaQPiDcRGCUDVfwGD2sKUqKEtc1cSoOrsMlaMOec1sySYCCgUYRSVLv2zSva2u+FQkB0pVkIw8bFuIudOOn3pOaKYVT3Iy97Pd0AYhOx5QcMsnxvRHlnuLf8ETDd3CNtrv2nejkDpRnANCmGkkFn/hsYzpBKE7jVbufgnKnV9HRM9zRPDDKPttYT61n0TdWkAAjggk9AhuxIeaXd69CYTcsGw7cBTakLVbNpRzGEgyWjkSOpMbZXkhGL6oX30R49qt3GoHrap7i0XdD41WQ+2icCNm5p1hmFqnHNlcla0riKmDZ183crDxChjbnurtxHPRE784sVhWvDfGP+SsTKibU3o5NtWHuZFGZOxP6P5VXqIOvaOSec4eYohyd7NslHuJbd1bewds85xYrNxkr2d+5IhFWF3NvaO684xjE2S5ulY+tu64Pna0fCPJgzw6vF5/WucLcYjt5xoq19O3UDptOg/OamJQRaCcPPnMTQ2QDFn+uhPvUfnCrMc99upyQY4Ui9Dlc/YoG3R/v4Cs9YE+g==",
            metadata: {},
            callType: "unary",
          },
        },
      ],
    },
    locations: ["aws:us-east-2"],
    message: "BDD test payload: synthetics_api_test_multi_step_payload.json",
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
