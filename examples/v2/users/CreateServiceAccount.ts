/**
 * Create a service account returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

// there is a valid "role" in the system
let ROLE_DATA_ID = process.env.ROLE_DATA_ID as string;

let params: v2.UsersApiCreateServiceAccountRequest = {
  body: {
    data: {
      type: "users",
      attributes: {
        name: "Test API Client",
        email:
          "Example-Create_a_service_account_returns_OK_response@datadoghq.com",
        serviceAccount: true,
      },
      relationships: {
        roles: {
          data: [
            {
              id: ROLE_DATA_ID,
              type: "roles",
            },
          ],
        },
      },
    },
  },
};

apiInstance
  .createServiceAccount(params)
  .then((data: v2.UserResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
