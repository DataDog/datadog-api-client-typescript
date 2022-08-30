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
          type: "text",
        },
      ],
      request: {
        basicAuth: {
          password: "PaSSw0RD!",
          type: "web",
          username: "my_username",
        },
        certificate: {
          cert: {},
          key: {},
        },
        certificateDomains: [],
        method: "GET",
        proxy: {
          url: "https://example.com",
        },
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
      deviceIds: ["laptop_large"],
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
