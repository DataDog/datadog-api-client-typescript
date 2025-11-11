/**
 * Get restriction query for a given role returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getRoleRestrictionQuery"] = true;
const apiInstance = new v2.LogsRestrictionQueriesApi(configuration);

const params: v2.LogsRestrictionQueriesApiGetRoleRestrictionQueryRequest = {
  roleId: "role_id",
};

apiInstance
  .getRoleRestrictionQuery(params)
  .then((data: v2.RestrictionQueryListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
