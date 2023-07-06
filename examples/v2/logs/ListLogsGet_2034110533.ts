/**
 * Get a quick list of logs returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.LogsApi(configuration);

const params: v2.LogsApiListLogsGetRequest = {
  filterQuery: "datadog-agent",
  filterIndexes: ["main"],
  filterFrom: new Date(2020, 9, 17, 11, 48, 36, 0),
  filterTo: new Date(2020, 9, 17, 12, 48, 36, 0),
  pageLimit: 5,
};

apiInstance
  .listLogsGet(params)
  .then((data: v2.LogsListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
