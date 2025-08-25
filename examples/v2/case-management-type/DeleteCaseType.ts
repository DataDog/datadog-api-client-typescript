/**
 * Delete a case type returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CaseManagementTypeApi(configuration);

const params: v2.CaseManagementTypeApiDeleteCaseTypeRequest = {
  caseTypeId: "case_type_id",
};

apiInstance
  .deleteCaseType(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
