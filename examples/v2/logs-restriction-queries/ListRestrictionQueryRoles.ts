/**
 * List roles for a restriction query returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listRestrictionQueryRoles"] = true;
const apiInstance = new v2.LogsRestrictionQueriesApi(configuration);

// there is a valid "restriction_query" in the system
const RESTRICTION_QUERY_DATA_ID = process.env
  .RESTRICTION_QUERY_DATA_ID as string;

const params: v2.LogsRestrictionQueriesApiListRestrictionQueryRolesRequest = {
  restrictionQueryId: RESTRICTION_QUERY_DATA_ID,
};

apiInstance
  .listRestrictionQueryRoles(params)
  .then((data: v2.RestrictionQueryRolesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
