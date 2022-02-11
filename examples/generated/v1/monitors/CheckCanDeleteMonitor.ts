import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

let params:v1.MonitorsApiCheckCanDeleteMonitorRequest = {
  // Array<number> | The IDs of the monitor to check.
  monitorIds: [
    1,
  ],
};

apiInstance.checkCanDeleteMonitor(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
