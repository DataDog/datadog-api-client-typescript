/**
 * Create global incident handle returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createGlobalIncidentHandle"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateGlobalIncidentHandleRequest = {
  body: {
    data: {
      attributes: {
        fields: {
          severity: ["SEV-1"],
        },
        name: "@incident-sev-1",
      },
      id: "b2494081-cdf0-4205-b366-4e1dd4fdf0bf",
      relationships: {
        commanderUser: {
          data: {
            id: "f7b538b1-ed7c-4e84-82de-fdf84a539d40",
            type: "incident_types",
          },
        },
        incidentType: {
          data: {
            id: "f7b538b1-ed7c-4e84-82de-fdf84a539d40",
            type: "incident_types",
          },
        },
      },
      type: "incidents_handles",
    },
  },
};

apiInstance
  .createGlobalIncidentHandle(params)
  .then((data: v2.IncidentHandleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
