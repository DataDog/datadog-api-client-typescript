import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiGetBrowserTestResultRequest = {
  // string | The public ID of the browser test to which the target result belongs.
  publicId: "public_id_example",
  // string | The ID of the result to get.
  resultId: "result_id_example",
};

apiInstance.getBrowserTestResult(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
