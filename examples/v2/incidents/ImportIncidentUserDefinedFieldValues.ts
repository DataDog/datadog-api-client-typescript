/**
 * Import values for an incident user-defined field returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.importIncidentUserDefinedFieldValues"] =
  true;
const apiInstance = new v2.IncidentsApi(configuration);

const params: v2.IncidentsApiImportIncidentUserDefinedFieldValuesRequest = {
  fieldId: "00000000-0000-0000-0000-000000000000",
};

apiInstance
  .importIncidentUserDefinedFieldValues(params)
  .then((data: v2.IncidentUserDefinedFieldResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
