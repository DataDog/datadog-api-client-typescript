/**
 * Grant role to a restriction query returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.addRoleToRestrictionQuery"] = true;
const apiInstance = new v2.LogsRestrictionQueriesApi(configuration);

// there is a valid "restriction_query" in the system
const RESTRICTION_QUERY_DATA_ID = process.env
  .RESTRICTION_QUERY_DATA_ID as string;

// there is a valid "role" in the system
const ROLE_DATA_ID = process.env.ROLE_DATA_ID as string;

const params: v2.LogsRestrictionQueriesApiAddRoleToRestrictionQueryRequest = {
  body: {
    data: {
      id: ROLE_DATA_ID,
      type: "roles",
    },
  },
  restrictionQueryId: RESTRICTION_QUERY_DATA_ID,
};

apiInstance
  .addRoleToRestrictionQuery(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
