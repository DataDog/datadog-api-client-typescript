/**
 * Delete case comment returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CaseManagementApi(configuration);

// there is a valid "case" in the system
const CASE_ID = process.env.CASE_ID as string;

// there is a valid "comment" in the system
const COMMENT_ID = process.env.COMMENT_ID as string;

const params: v2.CaseManagementApiDeleteCaseCommentRequest = {
  caseId: CASE_ID,
  cellId: COMMENT_ID,
};

apiInstance
  .deleteCaseComment(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
