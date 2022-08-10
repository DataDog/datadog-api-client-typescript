/**
 * Update an existing incident service returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentService"] = true;
const apiInstance = new v2.IncidentServicesApi(configuration);

// there is a valid "service" in the system
const SERVICE_DATA_ID = process.env.SERVICE_DATA_ID as string;

const params: v2.IncidentServicesApiUpdateIncidentServiceRequest = {
  body: {
    data: {
      type: "services",
      attributes: {
        name: "service name-updated",
      },
    },
  },
  serviceId: SERVICE_DATA_ID,
};

apiInstance
  .updateIncidentService(params)
  .then((data: v2.IncidentServiceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
