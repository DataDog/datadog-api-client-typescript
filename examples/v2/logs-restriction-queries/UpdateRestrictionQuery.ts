/**
 * Update a restriction query returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateRestrictionQuery"] = true;
const apiInstance = new v2.LogsRestrictionQueriesApi(configuration);

// there is a valid "restriction_query" in the system
const RESTRICTION_QUERY_DATA_ID = process.env
  .RESTRICTION_QUERY_DATA_ID as string;

const params: v2.LogsRestrictionQueriesApiUpdateRestrictionQueryRequest = {
  body: {
    data: {
      attributes: {
        restrictionQuery: "env:production",
      },
      type: "logs_restriction_queries",
    },
  },
  restrictionQueryId: RESTRICTION_QUERY_DATA_ID,
};

apiInstance
  .updateRestrictionQuery(params)
  .then((data: v2.RestrictionQueryWithoutRelationshipsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
