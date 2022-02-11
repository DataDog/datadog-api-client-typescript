import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiDeleteTestsRequest = {
  // SyntheticsDeleteTestsPayload | Public ID list of the Synthetic tests to be deleted.
  body: {
    publicIds: [],
  },
};

apiInstance.deleteTests(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
