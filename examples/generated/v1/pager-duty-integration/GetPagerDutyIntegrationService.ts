import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.PagerDutyIntegrationApi(configuration);

let params:v1.PagerDutyIntegrationApiGetPagerDutyIntegrationServiceRequest = {
  // string | The service name.
  serviceName: "service_name_example",
};

apiInstance.getPagerDutyIntegrationService(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
