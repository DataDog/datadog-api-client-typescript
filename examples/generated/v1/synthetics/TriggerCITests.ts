import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiTriggerCITestsRequest = {
  // SyntheticsCITestBody | Details of the test to trigger.
  body: {
    tests: [
      {
        allowInsecureCertificates: true,
        basicAuth: {
    password: "",
    type: "web",
    username: "",
  },
        body: "body_example",
        bodyType: "bodyType_example",
        cookies: "cookies_example",
        deviceIds: [
          "laptop_large",
        ],
        followRedirects: true,
        headers: {
          "key": "key_example",
        },
        locations: [
          "locations_example",
        ],
        metadata: {
          ci: {
            pipeline: {
              url: "url_example",
            },
            provider: {
              name: "name_example",
            },
          },
          git: {
            branch: "branch_example",
            commitSha: "commitSha_example",
          },
        },
        publicId: "aaa-aaa-aaa",
        retry: {
          count: 1,
          interval: 3.14,
        },
        startUrl: "startUrl_example",
        variables: {
          "key": "key_example",
        },
      },
    ],
  },
};

apiInstance.triggerCITests(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
