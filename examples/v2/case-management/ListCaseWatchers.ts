/**
 * Get case watchers returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listCaseWatchers"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiListCaseWatchersRequest = {
  caseId: "case_id",
};

apiInstance
  .listCaseWatchers(params)
  .then((data: v2.WatchersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
