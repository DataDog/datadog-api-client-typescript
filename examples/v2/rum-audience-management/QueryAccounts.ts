/**
 * Query accounts returns "Successful response with account data" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.queryAccounts"] = true;
const apiInstance = new v2.RumAudienceManagementApi(configuration);

const params: v2.RumAudienceManagementApiQueryAccountsRequest = {
  body: {
    data: {
      attributes: {
        limit: 20,
        query:
          "plan_type:enterprise AND user_count:>100 AND subscription_status:active",
        selectColumns: [
          "account_id",
          "account_name",
          "user_count",
          "plan_type",
          "subscription_status",
          "created_at",
          "mrr",
          "industry",
        ],
        sort: {
          field: "user_count",
          order: "DESC",
        },
        wildcardSearchTerm: "tech",
      },
      id: "query_account_request",
      type: "query_account_request",
    },
  },
};

apiInstance
  .queryAccounts(params)
  .then((data: v2.QueryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
