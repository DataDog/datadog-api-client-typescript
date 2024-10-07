/**
 * Update an incident type returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentType"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiUpdateIncidentTypeRequest = {
  body: {
    data: {
      attributes: {
        description:
          "Any incidents that harm (or have the potential to) the confidentiality, integrity, or availability of our data. Note: This will notify the security team.",
        isDefault: true,
        name: "Security Incident",
      },
      type: "incident_types",
    },
  },
  incidentTypeId: "incident_type_id",
};

apiInstance
  .updateIncidentType(params)
  .then((data: v2.IncidentTypeResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
