/**
 * Create an API test returns "OK - Returns the created test details." response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiCreateSyntheticsAPITestRequest = {
  body: {
    config: {
      assertions: [
        {
          operator: "lessThan",
          target: 1000,
          type: "responseTime",
        },
      ],
      request: {
        method: "GET",
        url: "https://example.com",
      },
    },
    locations: ["aws:eu-west-3"],
    message: "Notification message",
    name: "Example test name",
    options: {
      blockedRequestPatterns: [],
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
    subtype: "http",
    tags: ["env:production"],
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
