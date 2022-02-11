import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

let params:v1.MonitorsApiDeleteMonitorRequest = {
  // number | The ID of the monitor.
  monitorId: 1,
  // string | Delete the monitor even if it's referenced by other resources (for example SLO, composite monitor). (optional)
  force: "false",
};

apiInstance.deleteMonitor(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
