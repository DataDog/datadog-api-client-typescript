/**
 * Get PagerDuty related incidents returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getIncidentPagerdutyRelatedIncidents"] =
  true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiGetIncidentPagerdutyRelatedIncidentsRequest = {
  pagerdutyIncidentId: "pagerduty_incident_id",
};

apiInstance
  .getIncidentPagerdutyRelatedIncidents(params)
  .then((data: v2.IncidentPagerdutyRelatedIncidentsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
