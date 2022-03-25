/**
 * Edit a browser test returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
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
          password: "",
          type: "web",
          username: "",
        },
        certificate: {
          cert: {},
          key: {},
        },
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
      deviceIds: ["laptop_large"],
      monitorOptions: {},
      retry: {},
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
