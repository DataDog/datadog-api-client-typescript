/**
 * Update case comment returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateCaseComment"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiUpdateCaseCommentRequest = {
  body: {
    data: {
      attributes: {
        comment: "Updated comment text",
      },
      type: "case",
    },
  },
  caseId: "case_id",
  cellId: "cell_id",
};

apiInstance
  .updateCaseComment(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
