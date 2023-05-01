/**
 * Create a new incident service returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentService"] = true;
const apiInstance = new v2.IncidentServicesApi(configuration);

const params: v2.IncidentServicesApiCreateIncidentServiceRequest = {
  body: {
    data: {
      type: "services",
      attributes: {
        name: "Example-Incident-Service",
      },
    },
  },
};

apiInstance
  .createIncidentService(params)
  .then((data: v2.IncidentServiceResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
