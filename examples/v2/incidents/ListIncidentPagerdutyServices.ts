/**
 * List PagerDuty services returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listIncidentPagerdutyServices"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

apiInstance
  .listIncidentPagerdutyServices()
  .then((data: v2.IncidentPagerdutyServicesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
