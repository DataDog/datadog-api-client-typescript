/**
 * Link incident to case returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.linkIncident"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiLinkIncidentRequest = {
  body: {
    data: {
      id: "00000000-0000-0000-0000-000000000000",
      type: "incidents",
    },
  },
  caseId: "case_id",
};

apiInstance
  .linkIncident(params)
  .then((data: v2.CaseResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
