/**
 * Update an incident Microsoft Teams configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.updateIncidentMicrosoftTeamsConfiguration"
] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiUpdateIncidentMicrosoftTeamsConfigurationRequest =
  {
    body: {
      data: {
        attributes: {
          manualMeetingCreation: false,
          postMeetingSummary: true,
        },
        type: "microsoft_teams_configurations",
      },
    },
    configurationId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  };

apiInstance
  .updateIncidentMicrosoftTeamsConfiguration(params)
  .then((data: v2.IncidentMicrosoftTeamsConfigurationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
