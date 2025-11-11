/**
 * Grant role to a restriction query returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.addRoleToRestrictionQuery"] = true;
const apiInstance = new v2.LogsRestrictionQueriesApi(configuration);

const params: v2.LogsRestrictionQueriesApiAddRoleToRestrictionQueryRequest = {
  body: {
    data: {
      id: "3653d3c6-0c75-11ea-ad28-fb5701eabc7d",
      type: "roles",
    },
  },
  restrictionQueryId: "restriction_query_id",
};

apiInstance
  .addRoleToRestrictionQuery(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
