/**
 * Create a multi-step api test with every type of basicAuth returns "OK - Returns the created test details." response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

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
              type: "web",
            },
          },
          subtype: "http",
        },
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
              accessKey: "accessKey",
              secretKey: "secretKey",
              type: "sigv4",
            },
          },
          subtype: "http",
        },
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
              type: "ntlm",
            },
          },
          subtype: "http",
        },
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
              type: "digest",
            },
          },
          subtype: "http",
        },
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
              accessTokenUrl: "accessTokenUrl",
              tokenApiAuthentication: "header",
              clientId: "clientId",
              clientSecret: "clientSecret",
              type: "oauth-client",
            },
          },
          subtype: "http",
        },
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
              accessTokenUrl: "accessTokenUrl",
              password: "password",
              tokenApiAuthentication: "header",
              username: "username",
              type: "oauth-rop",
            },
          },
          subtype: "http",
        },
      ],
    },
    locations: ["aws:us-east-2"],
    message:
      "BDD test payload: synthetics_api_test_multi_step_with_every_type_of_basic_auth.json",
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
