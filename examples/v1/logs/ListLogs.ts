/**
 * Search logs returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsApi(configuration);

let params: v1.LogsApiListLogsRequest = {
  body: {
    index: "main",
    limit: 5,
    query: "service:web* AND @http.status_code:[200 TO 299]",
    sort: "asc",
    time: {
      from: new Date(new Date().getTime() / 1000 + -1 * 86400).getTime() / 1000,
      timezone: "Europe/Paris",
      to: new Date().getTime() / 1000,
    },
  },
};

apiInstance
  .listLogs(params)
  .then((data: v1.LogsListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
