/**
 * Get details of an incident service returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getIncidentService"] = true;
const apiInstance = new v2.IncidentServicesApi(configuration);

// there is a valid "service" in the system
const SERVICE_DATA_ID = process.env.SERVICE_DATA_ID as string;

const params: v2.IncidentServicesApiGetIncidentServiceRequest = {
  serviceId: SERVICE_DATA_ID,
};

apiInstance
  .getIncidentService(params)
  .then((data: v2.IncidentServiceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
