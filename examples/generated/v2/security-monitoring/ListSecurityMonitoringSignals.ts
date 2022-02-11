import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

let params:v2.SecurityMonitoringApiListSecurityMonitoringSignalsRequest = {
  // string | The search query for security signals. (optional)
  filterQuery: "security:attack status:high",
  // Date | The minimum timestamp for requested security signals. (optional)
  filterFrom: new Date('2019-01-02T09:42:36.320Z'),
  // Date | The maximum timestamp for requested security signals. (optional)
  filterTo: new Date('2019-01-03T09:42:36.320Z'),
  // SecurityMonitoringSignalsSort | The order of the security signals in results. (optional)
  sort: "timestamp",
  // string | A list of results using the cursor provided in the previous query. (optional)
  pageCursor: "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==",
  // number | The maximum number of security signals in the response. (optional)
  pageLimit: 25,
};

apiInstance.listSecurityMonitoringSignals(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
