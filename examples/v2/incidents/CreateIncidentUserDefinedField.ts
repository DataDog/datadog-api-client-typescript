/**
 * Create an incident user-defined field returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentUserDefinedField"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentUserDefinedFieldRequest = {
  body: {
    data: {
      attributes: {
        category: "what_happened",
        collected: "active",
        defaultValue: "critical",
        displayName: "Root Cause",
        name: "root_cause",
        ordinal: "1.5",
        required: false,
        tagKey: "datacenter",
        type: 3,
        validValues: [
          {
            description: "A critical severity incident.",
            displayName: "Critical",
            shortDescription: "Critical",
            value: "critical",
          },
        ],
      },
      relationships: {
        incidentType: {
          data: {
            id: "00000000-0000-0000-0000-000000000000",
            type: "incident_types",
          },
        },
      },
      type: "user_defined_field",
    },
  },
};

apiInstance
  .createIncidentUserDefinedField(params)
  .then((data: v2.IncidentUserDefinedFieldResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
