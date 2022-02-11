import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentServicesApi(configuration);

let params:v2.IncidentServicesApiGetIncidentServiceRequest = {
  // string | The ID of the incident service.
  serviceId: "service_id_example",
  // IncidentRelatedObject | Specifies which types of related objects should be included in the response. (optional)
  include: "users",
};

apiInstance.getIncidentService(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
