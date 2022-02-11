import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

let params:v1.LogsPipelinesApiUpdateLogsPipelineOrderRequest = {
  // LogsPipelinesOrder | Object containing the new ordered list of pipeline IDs.
  body: {
    pipelineIds: ["tags","org_ids","products"],
  },
};

apiInstance.updateLogsPipelineOrder(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
