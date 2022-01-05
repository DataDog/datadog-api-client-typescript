/**
 * List all users returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

// there is a valid "user" in the system
let USER_DATA_ATTRIBUTES_EMAIL = process.env.USER_DATA_ATTRIBUTES_EMAIL as string;



let params: v2.UsersApiListUsersRequest = {
  filter: USER_DATA_ATTRIBUTES_EMAIL,

};

apiInstance
  .listUsers(params)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
  })
  .catch((error: any) => console.error(error));