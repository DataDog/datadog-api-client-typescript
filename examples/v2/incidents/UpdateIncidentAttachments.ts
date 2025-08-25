/**
 * Create, update, and delete incident attachments returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentAttachments"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiUpdateIncidentAttachmentsRequest = {
  body: {
    data: [
      {
        attributes: {
          attachment: {
            documentUrl: "https://app.datadoghq.com/notebook/123",
            title: "Postmortem IR-123",
          },
          attachmentType: "postmortem",
        },
        id: "00000000-abcd-0002-0000-000000000000",
        type: "incident_attachments",
      },
      {
        attributes: {
          attachment: {
            documentUrl: "https://www.example.com/webstore-failure-runbook",
            title: "Runbook for webstore service failures",
          },
          attachmentType: "link",
        },
        type: "incident_attachments",
      },
      {
        id: "00000000-abcd-0003-0000-000000000000",
        type: "incident_attachments",
      },
    ],
  },
  incidentId: "incident_id",
};

apiInstance
  .updateIncidentAttachments(params)
  .then((data: v2.IncidentAttachmentUpdateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
