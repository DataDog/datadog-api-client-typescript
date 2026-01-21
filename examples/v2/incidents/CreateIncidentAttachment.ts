/**
 * Create incident attachment returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentAttachment"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

// there is a valid "incident" in the system
const INCIDENT_DATA_ID = process.env.INCIDENT_DATA_ID as string;

const params: v2.IncidentsApiCreateIncidentAttachmentRequest = {
  body: {
    data: {
      attributes: {
        attachment: {
          documentUrl:
            "https://app.datadoghq.com/notebook/ExampleIncident/Example-Incident",
          title: "Example-Incident",
        },
        attachmentType: "postmortem",
      },
      type: "incident_attachments",
    },
  },
  incidentId: INCIDENT_DATA_ID,
};

apiInstance
  .createIncidentAttachment(params)
  .then((data: v2.Attachment) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
