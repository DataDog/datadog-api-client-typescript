/**
 * List incident rules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listIncidentConfigRules"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

apiInstance
  .listIncidentConfigRules()
  .then((data: v2.IncidentRulesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
