/**
 * Delete a case type returns "NotContent" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CaseManagementTypeApi(configuration);

// there is a valid "case_type" in the system
const CASE_TYPE_ID = process.env.CASE_TYPE_ID as string;

const params: v2.CaseManagementTypeApiDeleteCaseTypeRequest = {
  caseTypeId: CASE_TYPE_ID,
};

apiInstance
  .deleteCaseType(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
