/**
 * Get a restriction query returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getRestrictionQuery"] = true;
const apiInstance = new v2.LogsRestrictionQueriesApi(configuration);

const params: v2.LogsRestrictionQueriesApiGetRestrictionQueryRequest = {
  restrictionQueryId: "restriction_query_id",
};

apiInstance
  .getRestrictionQuery(params)
  .then((data: v2.RestrictionQueryWithRelationshipsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
