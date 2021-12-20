/**
 * Get a quick list of logs returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsApi(configuration);

let params: v2.LogsApiListLogsGetRequest = {
  filterQuery: "datadog-agent",
  filterIndex: "main",
  filterFrom: "2020-09-17T11:48:36+01:00",
  filterTo: "2020-09-17T12:48:36+01:00",
  pageLimit: 5,
};

apiInstance
  .listLogsGet(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
