/**
 * List global incident handles returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listGlobalIncidentHandles"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

apiInstance
  .listGlobalIncidentHandles()
  .then((data: v2.IncidentHandlesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
