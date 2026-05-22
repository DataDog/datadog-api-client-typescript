/**
 * Export incidents returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.exportIncidents"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiExportIncidentsRequest = {
  body: {
    fields: ["title", "severity", "state"],
    query: "state:active",
  },
};

apiInstance
  .exportIncidents(params)
  .then((data: client.HttpFile) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
