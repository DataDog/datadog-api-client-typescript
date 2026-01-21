/**
 * Update incident attachment returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentAttachment"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "incident" in the system
const INCIDENT_DATA_ID = process.env.INCIDENT_DATA_ID as string;

// there is a valid "incident_attachment" in the system
const INCIDENT_ATTACHMENT_DATA_ID = process.env
  .INCIDENT_ATTACHMENT_DATA_ID as string;

const params: v2.IncidentsApiUpdateIncidentAttachmentRequest = {
  body: {
    data: {
      attributes: {
        attachment: {
          documentUrl:
            "https://app.datadoghq.com/notebook/124/Example-Incident",
          title: "Example-Incident",
        },
      },
      id: INCIDENT_ATTACHMENT_DATA_ID,
      type: "incident_attachments",
    },
  },
  incidentId: INCIDENT_DATA_ID,
  attachmentId: INCIDENT_ATTACHMENT_DATA_ID,
};

apiInstance
  .updateIncidentAttachment(params)
  .then((data: v2.Attachment) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
