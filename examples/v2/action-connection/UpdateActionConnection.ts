/**
 * Update an existing Action Connection returns "Successfully updated an Action Connection." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ActionConnectionApi(configuration);

const params: v2.ActionConnectionApiUpdateActionConnectionRequest = {
  body: {
    data: {
      attributes: {
        integration: {
          credentials: {
            accountId: "111222333444",
            role: "my-role",
            type: "AWSAssumeRole",
          },
          type: "AWS",
        },
        name: "My AWS Connection",
      },
      type: "action_connection",
    },
  },
  connectionId: "connection_id",
};

apiInstance
  .updateActionConnection(params)
  .then((data: v2.UpdateActionConnectionResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
