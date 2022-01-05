/**
 * Create a new role by cloning an existing role returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

// there is a valid "role" in the system
let ROLE_DATA_ID = process.env.ROLE_DATA_ID as string;



let params: v2.RolesApiCloneRoleRequest = {
  body: {
data: {
attributes: {
name: "Example-Create_a_new_role_by_cloning_an_existing_role_returns_OK_response clone",
},
type: "roles",
},
},
  roleId: ROLE_DATA_ID,

};

apiInstance
  .cloneRole(params)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
  })
  .catch((error: any) => console.error(error));