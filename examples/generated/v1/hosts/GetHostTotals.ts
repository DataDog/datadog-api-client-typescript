import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.HostsApi(configuration);

let params:v1.HostsApiGetHostTotalsRequest = {
  // number | Number of seconds from which you want to get total number of active hosts. (optional)
  from: 1,
};

apiInstance.getHostTotals(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
