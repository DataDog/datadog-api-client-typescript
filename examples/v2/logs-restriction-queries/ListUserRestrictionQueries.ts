/**
 * Get all restriction queries for a given user returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listUserRestrictionQueries"] = true;
const apiInstance = new v2.LogsRestrictionQueriesApi(configuration);

// there is a valid "user" in the system
const USER_DATA_ID = process.env.USER_DATA_ID as string;

const params: v2.LogsRestrictionQueriesApiListUserRestrictionQueriesRequest = {
  userId: USER_DATA_ID,
};

apiInstance
  .listUserRestrictionQueries(params)
  .then((data: v2.RestrictionQueryListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
