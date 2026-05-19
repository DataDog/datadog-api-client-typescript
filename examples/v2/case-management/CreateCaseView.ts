/**
 * Create a case view returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createCaseView"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiCreateCaseViewRequest = {
  body: {
    data: {
      attributes: {
        name: "Open bugs",
        projectId: "e555e290-ed65-49bd-ae18-8acbfcf18db7",
        query: "status:open type:bug",
      },
      type: "view",
    },
  },
};

apiInstance
  .createCaseView(params)
  .then((data: v2.CaseViewResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
