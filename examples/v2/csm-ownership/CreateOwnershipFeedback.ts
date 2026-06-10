/**
 * Submit feedback on an ownership inference returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createOwnershipFeedback"] = true;
const apiInstance = new v2.CSMOwnershipApi(configuration);

const params: v2.CSMOwnershipApiCreateOwnershipFeedbackRequest = {
  body: {
    data: {
      attributes: {
        action: "confirm",
        actorHandle: "user@example.com",
        actorType: "user",
        correctedOwnerHandle: "team-b",
        correctedOwnerType: "team",
        inferenceChecksum: "abc123",
        reason: "Confirmed by team lead.",
      },
      type: "ownership_feedback",
    },
  },
  resourceId: "res-1",
  ownerType: "team",
};

apiInstance
  .createOwnershipFeedback(params)
  .then((data: v2.OwnershipFeedbackResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
