/**
 * Fetch the result of a DDSQL query returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DDSQLApi(configuration);

const params: v2.DDSQLApiFetchDdsqlTabularQueryRequest = {
  body: {
    data: {
      attributes: {
        queryId: "eyJxdWVyeSI6ICJTRUxFQ1QgKiBGUk9NIGxvZ3MifQ==",
      },
      type: "ddsql_query_fetch_request",
    },
  },
};

apiInstance
  .fetchDdsqlTabularQuery(params)
  .then((data: v2.DdsqlTabularQueryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
