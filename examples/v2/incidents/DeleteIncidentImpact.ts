/**
 * Delete an incident impact returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteIncidentImpact"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// the "incident" has an "incident_impact"
const INCIDENT_IMPACT_DATA_ID = process.env.INCIDENT_IMPACT_DATA_ID as string;
const INCIDENT_IMPACT_DATA_RELATIONSHIPS_INCIDENT_DATA_ID = process.env
  .INCIDENT_IMPACT_DATA_RELATIONSHIPS_INCIDENT_DATA_ID as string;

const params: v2.IncidentsApiDeleteIncidentImpactRequest = {
  incidentId: INCIDENT_IMPACT_DATA_RELATIONSHIPS_INCIDENT_DATA_ID,
  impactId: INCIDENT_IMPACT_DATA_ID,
};

apiInstance
  .deleteIncidentImpact(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
