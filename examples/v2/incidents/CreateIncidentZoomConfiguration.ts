/**
 * Create an incident Zoom configuration returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentZoomConfiguration"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentZoomConfigurationRequest = {
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
};

apiInstance
  .createIncidentZoomConfiguration(params)
  .then((data: v2.IncidentZoomConfigurationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
