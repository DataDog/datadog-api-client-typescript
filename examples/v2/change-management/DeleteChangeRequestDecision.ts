/**
 * Delete a change request decision returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteChangeRequestDecision"] = true;
const apiInstance = new v2.ChangeManagementApi(configuration);

const params: v2.ChangeManagementApiDeleteChangeRequestDecisionRequest = {
  changeRequestId: "change_request_id",
  decisionId: "decision_id",
};

apiInstance
  .deleteChangeRequestDecision(params)
  .then((data: v2.ChangeRequestResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
