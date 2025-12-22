/**
 * Update incident attachment returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentAttachment"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiUpdateIncidentAttachmentRequest = {
  body: {
    data: {
      attributes: {
        attachment: {
          documentUrl:
            "https://app.datadoghq.com/notebook/124/Postmortem-IR-124",
          title: "Postmortem-IR-124",
        },
      },
      type: "incident_attachments",
    },
  },
  incidentId: "incident_id",
  attachmentId: "00000000-0000-0000-0000-000000000002",
};

apiInstance
  .updateIncidentAttachment(params)
  .then((data: v2.Attachment) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
