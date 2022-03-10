import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.AuditApi(configuration);

let params: v2.AuditApiSearchAuditLogsRequest = {
  // AuditLogsSearchEventsRequest (optional)
  body: {
    filter: {
      from: "now-15m",
      query: "@type:session AND @session.type:user",
      to: "now",
    },
    options: {
      timeOffset: 1,
      timezone: "GMT",
    },
    page: {
      cursor:
        "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==",
      limit: 25,
    },
    sort: "timestamp",
  },
};

apiInstance
  .searchAuditLogs(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
