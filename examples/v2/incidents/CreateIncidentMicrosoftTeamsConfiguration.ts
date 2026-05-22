/**
 * Create an incident Microsoft Teams configuration returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations[
  "v2.createIncidentMicrosoftTeamsConfiguration"
] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentMicrosoftTeamsConfigurationRequest =
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
  };

apiInstance
  .createIncidentMicrosoftTeamsConfiguration(params)
  .then((data: v2.IncidentMicrosoftTeamsConfigurationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
