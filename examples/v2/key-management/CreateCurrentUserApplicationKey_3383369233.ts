/**
 * Create an Application key with scopes for current user returns "Created" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params: v2.KeyManagementApiCreateCurrentUserApplicationKeyRequest = {
  body: {
data: {
type: "application_keys",
attributes: {
name: "Example-Create_an_Application_key_with_scopes_for_current_user_returns_Created_response",
scopes: [
"dashboards_read",
"dashboards_write",
"dashboards_public_share",
],
},
},
},
  
};

apiInstance
  .createCurrentUserApplicationKey(params)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
  })
  .catch((error: any) => console.error(error));