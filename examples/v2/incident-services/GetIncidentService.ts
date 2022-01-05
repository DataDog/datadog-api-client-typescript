/**
 * Get details of an incident service returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
configuration.unstableOperations["getIncidentService"] = true;
const apiInstance = new v2.IncidentServicesApi(configuration);

// there is a valid "service" in the system
let SERVICE_DATA_ID = process.env.SERVICE_DATA_ID as string;



let params: v2.IncidentServicesApiGetIncidentServiceRequest = {
  serviceId: SERVICE_DATA_ID,

};

apiInstance
  .getIncidentService(params)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
  })
  .catch((error: any) => console.error(error));