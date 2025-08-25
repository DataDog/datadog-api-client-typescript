/**
 * Get a user invitation returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

// the "user" has a "user_invitation"
const USER_INVITATION_ID = process.env.USER_INVITATION_ID as string;

const params: v2.UsersApiGetInvitationRequest = {
  userInvitationUuid: USER_INVITATION_ID,
};

apiInstance
  .getInvitation(params)
  .then((data: v2.UserInvitationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
