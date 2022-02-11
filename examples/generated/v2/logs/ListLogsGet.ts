import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsApi(configuration);

let params: v2.LogsApiListLogsGetRequest = {
  // string | Search query following logs syntax. (optional)
  filterQuery: "@datacenter:us @role:db",
  // string | For customers with multiple indexes, the indexes to search Defaults to '*' which means all indexes (optional)
  filterIndex: "main",
  // Date | Minimum timestamp for requested logs. (optional)
  filterFrom: new Date("2019-01-02T09:42:36.320Z"),
  // Date | Maximum timestamp for requested logs. (optional)
  filterTo: new Date("2019-01-03T09:42:36.320Z"),
  // LogsSort | Order of logs in results. (optional)
  sort: "timestamp",
  // string | List following results with a cursor provided in the previous query. (optional)
  pageCursor:
    "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==",
  // number | Maximum number of logs in the response. (optional)
  pageLimit: 25,
};

apiInstance
  .listLogsGet(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
