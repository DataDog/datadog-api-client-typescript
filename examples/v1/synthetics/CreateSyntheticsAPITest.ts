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
      ci: {
        executionRule: "blocking",
      },
      deviceIds: ["laptop_large"],
      httpVersion: "http1",
      monitorOptions: {},
      restrictedRoles: ["xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"],
      retry: {},
      rumSettings: {
        applicationId: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
        clientTokenId: 12345,
        isEnabled: true,
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
