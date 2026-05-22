/**
 * List incident template variables returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listIncidentTemplateVariables"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

apiInstance
  .listIncidentTemplateVariables()
  .then((data: v2.IncidentTemplateVariablesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
