import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiTriggerTestsRequest = {
  // SyntheticsTriggerBody | The identifiers of the tests to trigger.
  body: {
    tests: [
      {
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
      },
    ],
  },
};

apiInstance.triggerTests(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
