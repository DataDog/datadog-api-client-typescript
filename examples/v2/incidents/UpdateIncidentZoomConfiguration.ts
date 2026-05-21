/**
 * Update an incident Zoom configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentZoomConfiguration"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiUpdateIncidentZoomConfigurationRequest = {
  body: {
    data: {
      attributes: {
        manualMeetingCreation: false,
        meetingChatTimelineSync: false,
        postMeetingSummary: true,
      },
      type: "zoom_configurations",
    },
  },
  configurationId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .updateIncidentZoomConfiguration(params)
  .then((data: v2.IncidentZoomConfigurationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
