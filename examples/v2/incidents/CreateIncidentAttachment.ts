/**
 * Create incident attachment returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentAttachment"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentAttachmentRequest = {
  body: {
    data: {
      attributes: {
        attachment: {
          documentUrl:
            "https://app.datadoghq.com/notebook/123/Postmortem-IR-123",
          title: "Postmortem-IR-123",
        },
        attachmentType: "postmortem",
      },
      id: "00000000-0000-0000-0000-000000000000",
      type: "incident_attachments",
    },
  },
  incidentId: "incident_id",
};

apiInstance
  .createIncidentAttachment(params)
  .then((data: v2.Attachment) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
