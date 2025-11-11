/**
 * Get all restriction queries for a given user returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listUserRestrictionQueries"] = true;
const apiInstance = new v2.LogsRestrictionQueriesApi(configuration);

const params: v2.LogsRestrictionQueriesApiListUserRestrictionQueriesRequest = {
  userId: "user_id",
};

apiInstance
  .listUserRestrictionQueries(params)
  .then((data: v2.RestrictionQueryListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
