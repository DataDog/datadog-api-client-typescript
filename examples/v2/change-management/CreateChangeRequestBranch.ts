/**
 * Create a change request branch returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createChangeRequestBranch"] = true;
const apiInstance = new v2.ChangeManagementApi(configuration);

const params: v2.ChangeManagementApiCreateChangeRequestBranchRequest = {
  body: {
    data: {
      attributes: {
        branchName: "chm/CHM-1234",
        repoId: "DataDog/dd-source",
      },
      type: "change_request_branch",
    },
  },
  changeRequestId: "change_request_id",
};

apiInstance
  .createChangeRequestBranch(params)
  .then((data: v2.ChangeRequestResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
