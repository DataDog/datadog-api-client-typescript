/**
 * Anonymize users returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.anonymizeUsers"] = true;
const apiInstance = new v2.UsersApi(configuration);

const params: v2.UsersApiAnonymizeUsersRequest = {
  body: {
    data: {
      attributes: {
        userIds: ["00000000-0000-0000-0000-000000000000"],
      },
      id: "00000000-0000-0000-0000-000000000000",
      type: "anonymize_users_request",
    },
  },
};

apiInstance
  .anonymizeUsers(params)
  .then((data: v2.AnonymizeUsersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
