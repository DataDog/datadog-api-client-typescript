/**
 * Import an incident returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.importIncident"] = true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiImportIncidentRequest = {
  body: {
    data: {
      type: "incidents",
      attributes: {
        title: "Example-Incident",
        visibility: "organization",
      },
    },
  },
};

apiInstance
  .importIncident(params)
  .then((data: v2.IncidentImportResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
