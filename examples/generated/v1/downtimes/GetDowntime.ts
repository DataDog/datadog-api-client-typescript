import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.DowntimesApi(configuration);

let params:v1.DowntimesApiGetDowntimeRequest = {
  // number | ID of the downtime to fetch.
  downtimeId: 123456,
};

apiInstance.getDowntime(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
