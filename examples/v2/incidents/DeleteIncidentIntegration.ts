/**
 * Delete an incident integration metadata returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteIncidentIntegration"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "incident" in the system
const INCIDENT_DATA_ID = process.env.INCIDENT_DATA_ID as string;

// the "incident" has an "incident_integration_metadata"
const INCIDENT_INTEGRATION_METADATA_DATA_ID = process.env
  .INCIDENT_INTEGRATION_METADATA_DATA_ID as string;

const params: v2.IncidentsApiDeleteIncidentIntegrationRequest = {
  incidentId: INCIDENT_DATA_ID,
  integrationMetadataId: INCIDENT_INTEGRATION_METADATA_DATA_ID,
};

apiInstance
  .deleteIncidentIntegration(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
