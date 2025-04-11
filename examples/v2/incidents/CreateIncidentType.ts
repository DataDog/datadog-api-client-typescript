/**
 * Create an incident type returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentType"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentTypeRequest = {
  body: {
    data: {
      attributes: {
        description:
          "Any incidents that harm (or have the potential to) the confidentiality, integrity, or availability of our data.",
        isDefault: false,
        name: "8d4bbb66dccf2456",
      },
      type: "incident_types",
    },
  },
};

apiInstance
  .createIncidentType(params)
  .then((data: v2.IncidentTypeResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
