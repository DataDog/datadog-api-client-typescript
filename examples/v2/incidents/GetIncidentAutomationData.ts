/**
 * Get incident automation data returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getIncidentAutomationData"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiGetIncidentAutomationDataRequest = {
  incidentId: "incident_id",
  key: "key",
};

apiInstance
  .getIncidentAutomationData(params)
  .then((data: v2.IncidentAutomationDataResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
