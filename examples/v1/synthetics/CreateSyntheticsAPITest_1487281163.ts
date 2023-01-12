/**
 * Create an API HTTP test returns "OK - Returns the created test details." response
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
        {
          operator: "validatesXPath",
          target: {
            xPath: "target-xpath",
            targetValue: "0",
            operator: "contains",
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
            content: "cert-content",
            filename: "cert-filename",
            updatedAt: "2020-10-16T09:23:24.857Z",
          },
          key: {
            content: "key-content",
            filename: "key-filename",
            updatedAt: "2020-10-16T09:23:24.857Z",
          },
        },
        headers: {
          unique:
            "examplecreateanapihttptestreturnsokreturnsthecreatedtestdetailsresponse",
        },
        method: "GET",
        timeout: 10,
        url: "https://datadoghq.com",
        proxy: {
          url: "https://datadoghq.com",
          headers: {},
        },
        basicAuth: {
          accessTokenUrl: "https://datadog-token.com",
          audience: "audience",
          clientId: "client-id",
          clientSecret: "client-secret",
          resource: "resource",
          scope: "yoyo",
          tokenApiAuthentication: "header",
          type: "oauth-client",
        },
      },
    },
    locations: ["aws:us-east-2"],
    message: "BDD test payload: synthetics_api_http_test_payload.json",
    name: "Example-Create_an_API_HTTP_test_returns_OK_Returns_the_created_test_details_response",
    options: {
      acceptSelfSigned: false,
      allowInsecure: true,
      followRedirects: true,
      minFailureDuration: 10,
      minLocationFailed: 1,
      monitorName:
        "Example-Create_an_API_HTTP_test_returns_OK_Returns_the_created_test_details_response",
      monitorPriority: 5,
      retry: {
        count: 3,
        interval: 10,
      },
      tickEvery: 60,
      httpVersion: "http2",
    },
    subtype: "http",
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
