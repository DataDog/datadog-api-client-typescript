/**
 * Get a list of all incident services returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listIncidentServices"] = true;
const apiInstance = new v2.IncidentServicesApi(configuration);

// there is a valid "service" in the system
const SERVICE_DATA_ATTRIBUTES_NAME = process.env
  .SERVICE_DATA_ATTRIBUTES_NAME as string;

const params: v2.IncidentServicesApiListIncidentServicesRequest = {
  filter: SERVICE_DATA_ATTRIBUTES_NAME,
};

apiInstance
  .listIncidentServices(params)
  .then((data: v2.IncidentServicesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
