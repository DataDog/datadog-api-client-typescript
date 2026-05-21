/**
 * Publish an incident status page notice returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createIncidentStatusPageNotice"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiCreateIncidentStatusPageNoticeRequest = {
  body: {
    data: {
      attributes: {
        components: {
          component_1: "degraded_performance",
        },
        message: "We are investigating reports of elevated error rates.",
        status: "investigating",
        title: "Service degradation detected.",
      },
      type: "incident_integrations",
    },
  },
  incidentId: "incident_id",
  statuspageId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .createIncidentStatusPageNotice(params)
  .then((data: v2.IncidentStatusPageNoticeIntegrationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
