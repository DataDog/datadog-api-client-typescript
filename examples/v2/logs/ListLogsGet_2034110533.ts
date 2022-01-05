/**
 * Get a quick list of logs returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsApi(configuration);

let params: v2.LogsApiListLogsGetRequest = {
  filterQuery: "datadog-agent",
filterIndex: "main",
filterFrom: new Date(2020, 9, 17, 11, 48, 36, 0),
filterTo: new Date(2020, 9, 17, 12, 48, 36, 0),
pageLimit: 5,

};

apiInstance
  .listLogsGet(params)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
  })
  .catch((error: any) => console.error(error));