/**
 * Get a list of incidents returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listIncidents"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

apiInstance
  .listIncidents()
  .then((data: v2.IncidentsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
