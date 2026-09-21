/**
 * Create investigation notebook for case returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiCreateCaseNotebookRequest = {
  body: {
    data: {
      type: "notebook",
    },
  },
  caseId: "case_id",
};

apiInstance
  .createCaseNotebook(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
