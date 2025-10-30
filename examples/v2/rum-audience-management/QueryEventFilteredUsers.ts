/**
 * Query event filtered users returns "Successful response with filtered user data" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.queryEventFilteredUsers"] = true;
const apiInstance = new v2.RumAudienceManagementApi(configuration);

const params: v2.RumAudienceManagementApiQueryEventFilteredUsersRequest = {
  body: {
    data: {
      attributes: {
        eventQuery: {
          query:
            "@type:view AND @view.loading_time:>3000 AND @application.name:ecommerce-platform",
          timeFrame: {
            end: 1761309676,
            start: 1760100076,
          },
        },
        includeRowCount: true,
        limit: 25,
        query:
          "user_org_id:5001 AND first_country_code:US AND first_browser_name:Chrome",
        selectColumns: [
          "user_id",
          "user_email",
          "first_country_code",
          "first_browser_name",
          "events_count",
          "session_count",
          "error_count",
          "avg_loading_time",
        ],
      },
      id: "query_event_filtered_users_request",
      type: "query_event_filtered_users_request",
    },
  },
};

apiInstance
  .queryEventFilteredUsers(params)
  .then((data: v2.QueryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
