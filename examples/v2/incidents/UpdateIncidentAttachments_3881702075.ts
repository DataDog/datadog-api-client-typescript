/**
 * Create an incident attachment returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentAttachments"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "incident" in the system
const INCIDENT_DATA_ID = process.env.INCIDENT_DATA_ID as string;

const params: v2.IncidentsApiUpdateIncidentAttachmentsRequest = {
  body: {
    data: [
      {
        type: "incident_attachments",
        attributes: {
          attachmentType: "link",
          attachment: {
            documentUrl: "https://www.example.com/doc",
            title: "Example-Incident",
          },
        },
      },
    ],
  },
  incidentId: INCIDENT_DATA_ID,
};

apiInstance
  .updateIncidentAttachments(params)
  .then((data: v2.IncidentAttachmentUpdateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
