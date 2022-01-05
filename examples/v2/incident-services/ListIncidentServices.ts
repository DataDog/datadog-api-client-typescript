/**
 * Get a list of all incident services returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
configuration.unstableOperations["listIncidentServices"] = true;
const apiInstance = new v2.IncidentServicesApi(configuration);

// there is a valid "service" in the system
let SERVICE_DATA_ATTRIBUTES_NAME = process.env.SERVICE_DATA_ATTRIBUTES_NAME as string;



let params: v2.IncidentServicesApiListIncidentServicesRequest = {
  filter: SERVICE_DATA_ATTRIBUTES_NAME,

};

apiInstance
  .listIncidentServices(params)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
  })
  .catch((error: any) => console.error(error));