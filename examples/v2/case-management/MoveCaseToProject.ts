/**
 * Update case project returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.moveCaseToProject"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiMoveCaseToProjectRequest = {
  body: {
    data: {
      id: "e555e290-ed65-49bd-ae18-8acbfcf18db7",
      type: "project",
    },
  },
  caseId: "case_id",
};

apiInstance
  .moveCaseToProject(params)
  .then((data: v2.CaseResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
