/**
 * Send invitation emails returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

// there is a valid "user" in the system
let USER_DATA_ID = process.env.USER_DATA_ID as string;



let params: v2.UsersApiSendInvitationsRequest = {
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
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
  })
  .catch((error: any) => console.error(error));