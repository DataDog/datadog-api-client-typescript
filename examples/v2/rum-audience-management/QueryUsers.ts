/**
 * Query users returns "Successful response with user data" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.queryUsers"] = true;
const apiInstance = new v2.RumAudienceManagementApi(configuration);

const params: v2.RumAudienceManagementApiQueryUsersRequest = {
  body: {
    data: {
      attributes: {
        limit: 25,
        query:
          "user_email:*@techcorp.com AND first_country_code:US AND first_browser_name:Chrome",
        selectColumns: [
          "user_id",
          "user_email",
          "user_name",
          "user_org_id",
          "first_country_code",
          "first_browser_name",
          "first_device_type",
          "last_seen",
        ],
        sort: {
          field: "first_seen",
          order: "DESC",
        },
        wildcardSearchTerm: "john",
      },
      id: "query_users_request",
      type: "query_users_request",
    },
  },
};

apiInstance
  .queryUsers(params)
  .then((data: v2.QueryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
