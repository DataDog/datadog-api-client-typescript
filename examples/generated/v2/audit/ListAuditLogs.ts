import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.AuditApi(configuration);

let params: v2.AuditApiListAuditLogsRequest = {
  // string | Search query following Audit Logs syntax. (optional)
  filterQuery: "@type:session @application_id:xxxx",
  // Date | Minimum timestamp for requested events. (optional)
  filterFrom: new Date("2019-01-02T09:42:36.320Z"),
  // Date | Maximum timestamp for requested events. (optional)
  filterTo: new Date("2019-01-03T09:42:36.320Z"),
  // AuditLogsSort | Order of events in results. (optional)
  sort: "timestamp",
  // string | List following results with a cursor provided in the previous query. (optional)
  pageCursor:
    "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==",
  // number | Maximum number of events in the response. (optional)
  pageLimit: 25,
};

apiInstance
  .listAuditLogs(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
