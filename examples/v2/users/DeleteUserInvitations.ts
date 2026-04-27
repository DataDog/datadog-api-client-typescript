/**
 * Delete a pending user's invitations returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

const params: v2.UsersApiDeleteUserInvitationsRequest = {
  userId: "4dee724d-00cc-11ea-a77b-570c9d03c6c5",
};

apiInstance
  .deleteUserInvitations(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
