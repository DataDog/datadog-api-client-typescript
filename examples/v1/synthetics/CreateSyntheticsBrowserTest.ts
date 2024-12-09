/**
 * Create a browser test returns "OK - Returns the created test details." response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiCreateSyntheticsBrowserTestRequest = {
  body: {
    config: {
      assertions: [],
      variables: [
        {
          type: "text",
          name: "TEST_VARIABLE",
          pattern: "secret",
          secure: true,
          example: "secret",
        },
      ],
      configVariables: [
        {
          example: "content-type",
          name: "PROPERTY",
          pattern: "content-type",
          type: "text",
          secure: true,
        },
      ],
      request: {
        method: "GET",
        url: "https://datadoghq.com",
      },
      setCookie: "name:test",
    },
    locations: ["aws:us-east-2"],
    message: "Test message",
    name: "Example-Synthetic",
    options: {
      acceptSelfSigned: false,
      allowInsecure: true,
      deviceIds: ["chrome.laptop_large"],
      disableCors: true,
      followRedirects: true,
      minFailureDuration: 10,
      minLocationFailed: 1,
      noScreenshot: true,
      retry: {
        count: 2,
        interval: 10,
      },
      tickEvery: 300,
      enableProfiling: true,
      enableSecurityTesting: true,
    },
    tags: ["testing:browser"],
    type: "browser",
    steps: [
      {
        allowFailure: false,
        alwaysExecute: true,
        exitIfSucceed: true,
        isCritical: true,
        name: "Refresh page",
        params: {},
        type: "refresh",
      },
    ],
  },
};

apiInstance
  .createSyntheticsBrowserTest(params)
  .then((data: v1.SyntheticsBrowserTest) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
