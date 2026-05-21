/**
 * Create or update incident automation data returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.upsertIncidentAutomationData"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiUpsertIncidentAutomationDataRequest = {
  body: {
    data: {
      attributes: {
        value: "completed",
      },
      type: "incidents_automation_data",
    },
  },
  incidentId: "incident_id",
  key: "key",
};

apiInstance
  .upsertIncidentAutomationData(params)
  .then((data: v2.IncidentAutomationDataResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
