/**
 * Execute a tabular DDSQL query returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DDSQLApi(configuration);

const params: v2.DDSQLApiExecuteDdsqlTabularQueryRequest = {
  body: {
    data: {
      attributes: {
        query:
          "SELECT cloud_provider, count(*) FROM dd.hosts group by cloud_provider",
        rowLimit: 1000,
        time: {
          fromTimestamp: 1736942400000,
          toTimestamp: 1736946000000,
        },
      },
      type: "ddsql_query_request",
    },
  },
};

apiInstance
  .executeDdsqlTabularQuery(params)
  .then((data: v2.DdsqlTabularQueryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
