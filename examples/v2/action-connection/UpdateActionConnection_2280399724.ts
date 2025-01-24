/**
 * Update an existing Action Connection returns "Successfully updated Action Connection" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ActionConnectionApi(configuration);

const params: v2.ActionConnectionApiUpdateActionConnectionRequest = {
  body: {
    data: {
      type: "action_connection",
      attributes: {
        name: "Cassette Connection",
        integration: {
          type: "AWS",
          credentials: {
            type: "AWSAssumeRole",
            role: "MyRoleUpdated",
            accountId: "123456789123",
          },
        },
      },
    },
  },
  connectionId: "cb460d51-3c88-4e87-adac-d47131d0423d",
};

apiInstance
  .updateActionConnection(params)
  .then((data: v2.UpdateActionConnectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
