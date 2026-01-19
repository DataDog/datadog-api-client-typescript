/**
 * Create postmortem attachment returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentPostmortemAttachment"] =
  true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentPostmortemAttachmentRequest = {
  body: {
    data: {
      attributes: {
        cells: [
          {
            attributes: {
              definition: {
                content: "## Incident Summary\nThis incident was caused by...",
              },
            },
            id: "cell-1",
            type: "markdown",
          },
        ],
        content: "# Incident Report - IR-123\n[...]",
        postmortemTemplateId: "93645509-874e-45c4-adfa-623bfeaead89-123",
        title: "Postmortem-IR-123",
      },
      type: "incident_attachments",
    },
  },
  incidentId: "00000000-0000-0000-0000-000000000000",
};

apiInstance
  .createIncidentPostmortemAttachment(params)
  .then((data: v2.Attachment) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
