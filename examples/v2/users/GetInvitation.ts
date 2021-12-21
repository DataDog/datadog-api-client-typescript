/**
 * Get a user invitation returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

// the "user" has a "user_invitation"
let USER_INVITATION_ID = process.env.USER_INVITATION_ID as string;

let params: v2.UsersApiGetInvitationRequest = {
  userInvitationUuid: USER_INVITATION_ID,
};

apiInstance
  .getInvitation(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
