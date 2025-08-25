/**
 * Create a service account returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ServiceAccountsApi(configuration);

// there is a valid "role" in the system
const ROLE_DATA_ID = process.env.ROLE_DATA_ID as string;

const params: v2.ServiceAccountsApiCreateServiceAccountRequest = {
  body: {
    data: {
      type: "users",
      attributes: {
        name: "Test API Client",
        email: "Example-Service-Account@datadoghq.com",
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
