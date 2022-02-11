import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsApi(configuration);

let params: v1.LogsApiListLogsRequest = {
  // LogsListRequest | Logs filter
  body: {
    index: "retention-3,retention-15",
    limit: 1,
    query: "service:web* AND @http.status_code:[200 TO 299]",
    sort: "asc",
    startAt: "startAt_example",
    time: {
      from: new Date("2020-02-02T02:02:02Z"),
      timezone: "timezone_example",
      to: new Date("2020-02-02T20:20:20Z"),
    },
  },
};

apiInstance
  .listLogs(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
