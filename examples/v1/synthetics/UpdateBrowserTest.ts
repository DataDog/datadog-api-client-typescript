/**
 * Edit a browser test returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiUpdateBrowserTestRequest = {
  body: {
    config: {
      assertions: [],
      configVariables: [
        {
          name: "VARIABLE_NAME",
          secure: false,
          type: "text",
        },
      ],
      request: {
        basicAuth: {
          password: "PaSSw0RD!",
          type: "web",
          username: "my_username",
        },
        bodyType: "text/plain",
        callType: "unary",
        certificate: {
          cert: {},
          key: {},
        },
        certificateDomains: [],
        files: [{}],
        httpVersion: "http1",
        proxy: {
          url: "https://example.com",
        },
        service: "Greeter",
        url: "https://example.com",
      },
      variables: [
        {
          name: "VARIABLE_NAME",
          type: "text",
        },
      ],
    },
    locations: ["aws:eu-west-3"],
    message: "",
    name: "Example test name",
    options: {
      ci: {
        executionRule: "blocking",
      },
      deviceIds: ["chrome.laptop_large"],
      httpVersion: "http1",
      monitorOptions: {
        notificationPresetName: "show_all",
      },
      restrictedRoles: ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"],
      retry: {},
      rumSettings: {
        applicationId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        clientTokenId: 12345,
        isEnabled: true,
      },
      scheduling: {
        timeframes: [
          {
            day: 1,
            from: "07:00",
            to: "16:00",
          },
          {
            day: 3,
            from: "07:00",
            to: "16:00",
          },
        ],
        timezone: "America/New_York",
      },
    },
    status: "live",
    steps: [
      {
        type: "assertElementContent",
      },
    ],
    tags: ["env:prod"],
    type: "browser",
  },
  publicId: "public_id",
};

apiInstance
  .updateBrowserTest(params)
  .then((data: v1.SyntheticsBrowserTest) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
