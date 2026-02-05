/**
 * List postmortem templates returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listIncidentPostmortemTemplates"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

apiInstance
  .listIncidentPostmortemTemplates()
  .then((data: v2.PostmortemTemplatesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
