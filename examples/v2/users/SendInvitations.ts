/**
 * Send invitation emails returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

// there is a valid "user" in the system
const USER_DATA_ID = process.env.USER_DATA_ID as string;

const params: v2.UsersApiSendInvitationsRequest = {
  body: {
    data: [
      {
        type: "user_invitations",
        relationships: {
          user: {
            data: {
              type: "users",
              id: USER_DATA_ID,
            },
          },
        },
      },
    ],
  },
};

apiInstance
  .sendInvitations(params)
  .then((data: v2.UserInvitationsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
