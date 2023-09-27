/**
 * Create a browser test returns "OK - Returns saved rumSettings." response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiCreateSyntheticsBrowserTestRequest = {
  body: {
    config: {
      assertions: [],
      configVariables: [
        {
          example: "content-type",
          name: "PROPERTY",
          pattern: "content-type",
          type: "text",
        },
      ],
      request: {
        method: "GET",
        url: "https://datadoghq.com",
        certificateDomains: ["https://datadoghq.com"],
      },
      setCookie: "name:test",
    },
    locations: ["aws:us-east-2"],
    message: "Test message",
    name: "Example-Synthetic",
    options: {
      acceptSelfSigned: false,
      allowInsecure: true,
      deviceIds: ["tablet"],
      disableCors: true,
      followRedirects: true,
      minFailureDuration: 10,
      minLocationFailed: 1,
      noScreenshot: true,
      retry: {
        count: 2,
        interval: 10,
      },
      rumSettings: {
        isEnabled: true,
        applicationId: "mockApplicationId",
        clientTokenId: 12345,
      },
      tickEvery: 300,
      ci: {
        executionRule: "skipped",
      },
      ignoreServerCertificateError: true,
      disableCsp: true,
      initialNavigationTimeout: 200,
    },
    tags: ["testing:browser"],
    type: "browser",
    steps: [
      {
        allowFailure: false,
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
