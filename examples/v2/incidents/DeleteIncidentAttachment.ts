/**
 * Delete incident attachment returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteIncidentAttachment"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiDeleteIncidentAttachmentRequest = {
  incidentId: "incident_id",
  attachmentId: "00000000-0000-0000-0000-000000000002",
};

apiInstance
  .deleteIncidentAttachment(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
