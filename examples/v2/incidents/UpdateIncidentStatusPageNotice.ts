/**
 * Update an incident status page notice returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateIncidentStatusPageNotice"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiUpdateIncidentStatusPageNoticeRequest = {
  body: {
    data: {
      attributes: {
        message: "The issue has been resolved.",
        status: "resolved",
        title: "Service degradation resolved.",
      },
      type: "incident_integrations",
    },
  },
  incidentId: "incident_id",
  statuspageId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
  noticeId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .updateIncidentStatusPageNotice(params)
  .then((data: v2.IncidentStatusPageNoticeIntegrationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
