/**
 * Update an existing incident integration metadata returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentIntegration"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "incident" in the system
const INCIDENT_DATA_ID = process.env.INCIDENT_DATA_ID as string;

// the "incident" has an "incident_integration_metadata"
const INCIDENT_INTEGRATION_METADATA_DATA_ID = process.env
  .INCIDENT_INTEGRATION_METADATA_DATA_ID as string;

const params: v2.IncidentsApiUpdateIncidentIntegrationRequest = {
  body: {
    data: {
      attributes: {
        incidentId: INCIDENT_DATA_ID,
        integrationType: 1,
        metadata: {
          channels: [
            {
              channelId: "C0123456789",
              channelName: "#updated-channel-name",
              teamId: "T01234567",
              redirectUrl:
                "https://slack.com/app_redirect?channel=C0123456789&team=T01234567",
            },
          ],
        },
      },
      type: "incident_integrations",
    },
  },
  incidentId: INCIDENT_DATA_ID,
  integrationMetadataId: INCIDENT_INTEGRATION_METADATA_DATA_ID,
};

apiInstance
  .updateIncidentIntegration(params)
  .then((data: v2.IncidentIntegrationMetadataResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
