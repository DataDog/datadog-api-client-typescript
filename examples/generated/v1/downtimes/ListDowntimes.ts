import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

let params:v1.DowntimesApiListDowntimesRequest = {
  // boolean | Only return downtimes that are active when the request is made. (optional)
  currentOnly: true,
};

apiInstance.listDowntimes(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
