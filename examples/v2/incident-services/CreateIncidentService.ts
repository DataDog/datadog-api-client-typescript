/**
 * Create a new incident service returns "CREATED" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.IncidentServicesApi(configuration);

let params: v2.IncidentServicesApiCreateIncidentServiceRequest = {
  body: {
    data: {
      type: "services",
      attributes: {
        name: "Example-Create_a_new_incident_service_returns_CREATED_response",
      },
    },
  },
};

apiInstance
  .createIncidentService(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
