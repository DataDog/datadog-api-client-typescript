/**
 * Update an incident user-defined field returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentUserDefinedField"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiUpdateIncidentUserDefinedFieldRequest = {
  body: {
    data: {
      attributes: {
        category: "what_happened",
        collected: "active",
        defaultValue: "critical",
        displayName: "Root Cause",
        ordinal: "1.5",
        required: false,
        validValues: [
          {
            description: "A critical severity incident.",
            displayName: "Critical",
            shortDescription: "Critical",
            value: "critical",
          },
        ],
      },
      id: "00000000-0000-0000-0000-000000000000",
      type: "user_defined_field",
    },
  },
  fieldId: "00000000-0000-0000-0000-000000000000",
};

apiInstance
  .updateIncidentUserDefinedField(params)
  .then((data: v2.IncidentUserDefinedFieldResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
