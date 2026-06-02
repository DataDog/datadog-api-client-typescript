/**
 * Update an incident impact returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentImpact"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiUpdateIncidentImpactRequest = {
  body: {
    data: {
      attributes: {
        description: "Service was unavailable for external users",
        endAt: new Date(2025, 8, 29, 13, 17, 0, 0),
        fields: {
          customers_impacted: "all",
          products_impacted: "['shopping', 'marketing']",
        },
        startAt: new Date(2025, 8, 28, 13, 17, 0, 0),
      },
      type: "incident_impacts",
    },
  },
  incidentId: "incident_id",
  impactId: "impact_id",
};

apiInstance
  .updateIncidentImpact(params)
  .then((data: v2.IncidentImpactResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
