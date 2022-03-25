/**
 * Create an API test returns "OK - Returns the created test details." response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
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
      deviceIds: ["laptop_large"],
      monitorOptions: {},
      retry: {},
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
