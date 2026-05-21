/**
 * List incident Jira templates returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listIncidentJiraTemplates"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

apiInstance
  .listIncidentJiraTemplates()
  .then((data: v2.IncidentJiraTemplatesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
