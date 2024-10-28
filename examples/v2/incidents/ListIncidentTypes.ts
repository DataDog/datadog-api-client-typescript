/**
 * Get a list of incident types returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listIncidentTypes"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

apiInstance
  .listIncidentTypes()
  .then((data: v2.IncidentTypeListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
