import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiUpdateBrowserTestRequest = {
  // string | The public ID of the test to get details from.
  publicId: "public_id_example",
  // SyntheticsBrowserTest | New test details to be saved.
  body: {
    config: {
      assertions: [
        {
    operator: "contains",
    property: "property_example",
    target: null,
    type: "statusCode",
  },
      ],
      configVariables: [
        {
          example: "example_example",
          id: "id_example",
          name: "VARIABLE_NAME",
          pattern: "pattern_example",
          type: "text",
        },
      ],
      request: {
        allowInsecure: true,
        basicAuth: {
    password: "",
    type: "web",
    username: "",
  },
        body: "body_example",
        certificate: {
          cert: {
            content: "content_example",
            filename: "filename_example",
            updatedAt: "updatedAt_example",
          },
          key: {
            content: "content_example",
            filename: "filename_example",
            updatedAt: "updatedAt_example",
          },
        },
        dnsServer: "dnsServer_example",
        dnsServerPort: 1,
        followRedirects: true,
        headers: {
          "key": "key_example",
        },
        host: "host_example",
        message: "message_example",
        method: "GET",
        noSavingResponseBody: true,
        numberOfPackets: 0,
        port: 1,
        proxy: {
          headers: {
            "key": "key_example",
          },
          url: "https://example.com",
        },
        query: {},
        servername: "servername_example",
        shouldTrackHops: true,
        timeout: 3.14,
        url: "https://example.com",
      },
      setCookie: "setCookie_example",
      variables: [
        {
          example: "example_example",
          id: "id_example",
          name: "VARIABLE_NAME",
          pattern: "pattern_example",
          type: "text",
        },
      ],
    },
    locations: ["example-location"],
    message: "",
    name: "Example test name",
    options: {
      acceptSelfSigned: true,
      allowInsecure: true,
      deviceIds: [
        "laptop_large",
      ],
      disableCors: true,
      followRedirects: true,
      minFailureDuration: 1,
      minLocationFailed: 1,
      monitorName: "monitorName_example",
      monitorOptions: {
        renotifyInterval: 0,
      },
      monitorPriority: 1,
      noScreenshot: true,
      retry: {
        count: 1,
        interval: 3.14,
      },
      tickEvery: 30,
    },
    status: "live",
    steps: [
      {
        allowFailure: true,
        name: "name_example",
        params: {},
        timeout: 1,
        type: "assertElementContent",
      },
    ],
    tags: [
      "tags_example",
    ],
    type: "browser",
  },
};

apiInstance.updateBrowserTest(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
