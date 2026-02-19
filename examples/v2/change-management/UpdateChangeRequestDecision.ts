/**
 * Update a change request decision returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateChangeRequestDecision"] = true;
const apiInstance = new v2.ChangeManagementApi(configuration);

const params: v2.ChangeManagementApiUpdateChangeRequestDecisionRequest = {
  body: {
    data: {
      attributes: {
        id: "CHM-1234",
      },
      relationships: {
        changeRequestDecisions: {
          data: [
            {
              id: "decision-id-0",
              type: "change_request_decision",
            },
          ],
        },
      },
      type: "change_request",
    },
    included: [
      {
        attributes: {
          changeRequestStatus: "REQUESTED",
          requestReason: "Please review and approve this change",
        },
        id: "decision-id-0",
        relationships: {
          requestedUser: {
            data: {
              id: "00000000-0000-0000-0000-000000000000",
              type: "user",
            },
          },
        },
        type: "change_request_decision",
      },
    ],
  },
  changeRequestId: "change_request_id",
  decisionId: "decision_id",
};

apiInstance
  .updateChangeRequestDecision(params)
  .then((data: v2.ChangeRequestResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
