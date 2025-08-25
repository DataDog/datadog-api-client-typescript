/**
 * Get a list of attachments returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listIncidentAttachments"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiListIncidentAttachmentsRequest = {
  incidentId: "incident_id",
};

apiInstance
  .listIncidentAttachments(params)
  .then((data: v2.IncidentAttachmentsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
