/**
 * Search incidents returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.searchIncidentsV2"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

apiInstance
  .searchIncidentsV2()
  .then((data: v2.IncidentSearchResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
