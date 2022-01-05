/**
 * Add a user to a role returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

// there is a valid "role" in the system
let ROLE_DATA_ID = process.env.ROLE_DATA_ID as string;



// there is a valid "user" in the system
let USER_DATA_ID = process.env.USER_DATA_ID as string;



let params: v2.RolesApiAddUserToRoleRequest = {
  body: {
data: {
id: USER_DATA_ID,
type: "users",
},
},
  roleId: ROLE_DATA_ID,

};

apiInstance
  .addUserToRole(params)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
  })
  .catch((error: any) => console.error(error));