/**
 * Get a list of incident user-defined fields returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listIncidentUserDefinedFields"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

apiInstance
  .listIncidentUserDefinedFields()
  .then((data: v2.IncidentUserDefinedFieldListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
